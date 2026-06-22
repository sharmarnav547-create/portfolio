import React from 'react';

export const Logo = ({ className = '', style = {} }) => {
  return (
    <div className={`flex items-center select-none ${className}`} style={style}>
      <img src="/images/logo.png" alt="PitchBrands Logo" className="h-16 md:h-20 w-auto object-contain" />
    </div>
  );
};
