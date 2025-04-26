import React from 'react';

interface FlashLogoProps {
  className?: string;
}

export const FlashLogo: React.FC<FlashLogoProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 3V10H19L11 21V14H5L13 3Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};