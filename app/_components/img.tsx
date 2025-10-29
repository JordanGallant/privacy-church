import React from 'react';

interface CustomImageProps {
  src: string;
  crop?: 'top' | 'bottom' | 'shrink' | null;
  text?: string;
  subtext?: string;
  invert?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  crop = null,
  text = '',
  subtext = '',
  invert = false,
}) => {
  const getCropStyle = (): React.CSSProperties => {
    if (crop === 'top') {
      return {
        objectFit: 'cover',
        objectPosition: 'top',
        height: '200%',
        transform: 'translateY(0)',
      };
    } else if (crop === 'bottom') {
      return {
        objectFit: 'cover',
        objectPosition: 'bottom',
        height: '200%',
        transform: 'translateY(-50%)',
      };
    } else if (crop === 'shrink') {
      return {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
      };
    }
    return {
      objectFit: 'cover',
      height: '100%',
      width: '100%',
    };
  };

  const getContainerClass = () => {
    if (crop === 'shrink') {
      return 'relative w-[167px] h-[167px] overflow-hidden rounded-lg shadow-lg mx-auto';
    }
    return 'relative w-full h-[167px] overflow-hidden rounded-lg shadow-lg';
  };

  const getGradientStyle = () => {
    if (crop === 'shrink') {
      return {
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)',
      };
    }
    return {
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
    };
  };

  return (
    <div className={getContainerClass()}>
      <img
        src={src}
        alt={text || 'Custom image'}
        className={`w-full transition duration-300 ${invert ? 'scale-x-[-1]' : ''}`}
        style={getCropStyle()}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={getGradientStyle()}
      />
      {text && (
        <div className="absolute bottom-2 left-3 text-white px-1 py-1 rounded">
         <div className="text-[22px] leading-[22px] mb-[6px] font-[family-name:var(--font-gt-planar-image)]">
          {text}
        </div>
          {subtext && (
          <div className="text-[14px] font-light leading-tight tracking-tight font-[family-name:var(--font-dm-mono)]" style={{ wordSpacing: '-2px' }}>
  {subtext}
</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomImage;
