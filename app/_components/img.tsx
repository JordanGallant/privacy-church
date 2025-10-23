import React from 'react';

interface CustomImageProps {
  src: string;
  crop?: 'top' | 'bottom' | 'shrink' | null;
  text?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, crop = null, text = '' }) => {
  const getCropStyle = (): React.CSSProperties => {
    if (crop === 'top') {
      return {
        objectFit: 'cover',
        objectPosition: 'top',
        height: '200%',
        transform: 'translateY(0)'
      };
    } else if (crop === 'bottom') {
      return {
        objectFit: 'cover',
        objectPosition: 'bottom',
        height: '200%',
        transform: 'translateY(-50%)'
      };
    } else if (crop === 'shrink') {
      return {
        objectFit: 'cover',
        height: '100%',
        width: '100%'
      };
    }
    return {
      objectFit: 'cover',
      height: '100%',
      width: '100%'
    };
  };

  const getContainerClass = () => {
    if (crop === 'shrink') {
      return "relative w-1/2 h-64 overflow-hidden rounded-lg shadow-lg mx-auto";
    }
    return "relative w-full h-64 overflow-hidden rounded-lg shadow-lg";
  };

  const getGradientStyle = () => {
    if (crop === 'shrink') {
      return {
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)'
      };
    }
    return {
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
    };
  };

  return (
    <div className={getContainerClass()}>
      <img
        src={src}
        alt={text || 'Custom image'}
        className="w-full"
        style={getCropStyle()}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={getGradientStyle()}
      />
      {text && (
        <div className="absolute bottom-4 left-4 text-white px-3 py-1 rounded">
          {text}
        </div>
      )}
    </div>
  );
};

export default CustomImage