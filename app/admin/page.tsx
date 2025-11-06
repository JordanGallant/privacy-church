'use client'
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BatchId } from '@ethersphere/bee-js';
import { isStreamOngoing, startStream, stopStream, streamBee } from '@solarpunkltd/swarm-stream-js';
import { useEthers } from '@usedapp/core';

import { assertAtLeastFourChars, assertBatchId, assertPositiveInteger } from '../lib/utils/formValidation';

import { WithAsyncErrorBoundary, WithErrorBoundary } from '../hooks/WithErrorBoundary';


interface FormData {
  key: string;
  streamTopic: string;
  stamp: string;
  timeslice: string;
  videoBitsPerSecond: string;
}

const formFields = [
  {
    name: 'key',
    label: 'Please provide your key for the feed',
    defaultValue: '',
    rules: { required: 'Key is required' },
  },
  {
    name: 'streamTopic',
    label: 'This is how others will find your stream',
    defaultValue: '',
    rules: { required: 'Topic is required', validate: assertAtLeastFourChars },
  },
  {
    name: 'stamp',
    label: 'Please provide a valid stamp',
    defaultValue: '',
    rules: { required: 'Stamp is required', validate: assertBatchId },
  },
  {
    name: 'timeslice',
    label: 'Set the timeslice',
    defaultValue: '2000',
    rules: { required: 'Timeslice is required', validate: assertPositiveInteger },
  },
  {
    name: 'videoBitsPerSecond',
    label: 'Set the video bits per second',
    defaultValue: '2500000',
    rules: { required: 'Video bits per second is required', validate: assertPositiveInteger },
  },
];

const writeBeeUrl = process.env.NEXT_PUBLIC_WRITE_BEE_URL!;
if (!writeBeeUrl) {
  throw new Error('Missing env var: NEXT_PUBLIC_WRITE_BEE_URL');
}

streamBee.setBee(writeBeeUrl);
export default function Stream() {
  const { account, library } = useEthers();
  const { control, handleSubmit, getValues, formState: { errors } } = useForm<FormData>();

  const [isLive, setIsLive] = useState(false);
  const [options, setOptions] = useState({
    audio: true,
    video: true,
  });

  useEffect(() => {
    setIsLive(isStreamOngoing());
  }, []);

  const onSubmit = WithAsyncErrorBoundary(async (data: FormData) => {
    if (!library) return;

    await startStream({ address: account!, key: data.key }, data.streamTopic, new BatchId(data.stamp), {
      audio: options.audio,
      video: options.video,
      timeslice: +data.timeslice,
      videoBitsPerSecond: +data.videoBitsPerSecond,
    });

    setIsLive(true);
  });

  const stop = WithErrorBoundary(() => {
    stopStream();
    setIsLive(false);
  });

  return (
    <div className="stream">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="stream-form">
          {isLive ? (
            <>
              <p>Account: {account}</p>
              <p>Topic: {getValues('streamTopic')}</p>
              <button type="button" onClick={() => stop()}>Stop stream</button>
            </>
          ) : (
            <>
              {formFields.slice(0, 3).map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <Controller
                    name={field.name as keyof FormData}
                    control={control}
                    defaultValue={field.defaultValue}
                    rules={field.rules}
                    render={({ field: controllerField }) => (
                      <input
                        id={field.name}
                        type="text"
                        {...controllerField}
                      />
                    )}
                  />
                  {errors[field.name as keyof FormData] && (
                    <span className="error">{errors[field.name as keyof FormData]?.message}</span>
                  )}
                </div>
              ))}

              <div className="stream-options">
                <label>
                  <input
                    type="checkbox"
                    checked={options.audio}
                    onChange={() => setOptions({ ...options, audio: !options.audio })}
                  />
                  Audio
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={options.video}
                    onChange={() => setOptions({ ...options, video: !options.video })}
                  />
                  Video
                </label>
              </div>

              {options.video && (
                <>
                  {formFields.slice(3).map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name}>{field.label}</label>
                      <Controller
                        name={field.name as keyof FormData}
                        control={control}
                        defaultValue={field.defaultValue}
                        rules={field.rules}
                        render={({ field: controllerField }) => (
                          <input
                            id={field.name}
                            type="text"
                            {...controllerField}
                          />
                        )}
                      />
                      {errors[field.name as keyof FormData] && (
                        <span className="error">{errors[field.name as keyof FormData]?.message}</span>
                      )}
                    </div>
                  ))}
                </>
              )}
              <button type="submit">Start stream</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}