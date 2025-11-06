'use client'
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BatchId } from '@ethersphere/bee-js';
import { isStreamOngoing, startStream, stopStream, streamBee } from '@solarpunkltd/swarm-stream-js';
import { useEthers } from '@usedapp/core';

import { assertAtLeastFourChars, assertBatchId, assertPositiveInteger } from '../lib/utils/formValidation';
import { WithAsyncErrorBoundary, WithErrorBoundary } from '../hooks/WithErrorBoundary';
import { Connect } from '../_components/modals/wallet';

import Navbar from '../_components/nav';

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
    label: 'Please enter your private key:',
    defaultValue: '',
    rules: { required: 'Key is required' },
  },
  {
    name: 'streamTopic',
    label: 'Name of your stream:',
    defaultValue: '',
    rules: { required: 'Topic is required', validate: assertAtLeastFourChars },
  },
  {
    name: 'stamp',
    label: 'Please provide a swarm node postage stamp:',
    defaultValue: '',
    rules: { required: 'Stamp is required', validate: assertBatchId },
  },
  {
    name: 'timeslice',
    label: 'Set the timeslice:',
    defaultValue: '2000',
    rules: { required: 'Timeslice is required', validate: assertPositiveInteger },
  },
  {
    name: 'videoBitsPerSecond',
    label: 'Set the video bits per second:',
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
    <>
    <Navbar/>
    <div className="px-6 max-w-4xl mx-auto">
        <Connect/>
      <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">
        Stream Admin
      </h1>
      <p
        className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-8 pl-[10px]"
        style={{ color: "#717171" }}
      >
        Configure and manage your live stream settings
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {isLive ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-[family-name:var(--font-dm-mono)] text-sm font-medium">LIVE</span>
                </div>
                <p className="font-[family-name:var(--font-dm-mono)] text-sm">
                  <span className="text-gray-500">Account:</span> <span className="font-medium">{account}</span>
                </p>
                <p className="font-[family-name:var(--font-dm-mono)] text-sm">
                  <span className="text-gray-500">Topic:</span> <span className="font-medium">{getValues('streamTopic')}</span>
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => stop()}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-[family-name:var(--font-dm-mono)] py-3 px-4 rounded-md transition-colors duration-200"
              >
                Stop stream
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {formFields.slice(0, 3).map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label 
                      htmlFor={field.name}
                      className="block font-[family-name:var(--font-dm-mono)] text-sm font-medium text-gray-700"
                    >
                      {field.label}
                    </label>
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-[family-name:var(--font-dm-mono)] text-sm"
                        />
                      )}
                    />
                    {errors[field.name as keyof FormData] && (
                      <span className="text-red-500 text-sm font-[family-name:var(--font-dm-mono)]">
                        {errors[field.name as keyof FormData]?.message}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-[family-name:var(--font-dm-mono)] text-sm font-medium text-gray-700 mb-3">
                  Stream Options
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.audio}
                      onChange={() => setOptions({ ...options, audio: !options.audio })}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="font-[family-name:var(--font-dm-mono)] text-sm text-gray-700">
                      Audio
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.video}
                      onChange={() => setOptions({ ...options, video: !options.video })}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="font-[family-name:var(--font-dm-mono)] text-sm text-gray-700">
                      Video
                    </span>
                  </label>
                </div>
              </div>

              {options.video && (
                <div className="space-y-4">
                  {formFields.slice(3).map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label 
                        htmlFor={field.name}
                        className="block font-[family-name:var(--font-dm-mono)] text-sm font-medium text-gray-700"
                      >
                        {field.label}
                      </label>
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-[family-name:var(--font-dm-mono)] text-sm"
                          />
                        )}
                      />
                      {errors[field.name as keyof FormData] && (
                        <span className="text-red-500 text-sm font-[family-name:var(--font-dm-mono)]">
                          {errors[field.name as keyof FormData]?.message}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-[family-name:var(--font-dm-mono)] py-3 px-4 rounded-md transition-colors duration-200 mt-6"
              >
                Start stream
              </button>
            </>
          )}
        </div>
      </form>
    </div>
    </>
  );
}