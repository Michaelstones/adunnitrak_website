import React from 'react';

export const CustomLinkedinIcon = ({ size = 24, className = "", ...props }) => {
  return (
    <svg
      xmlns="http://w3.org"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* The 'in' box outline */}
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      {/* The 'i' stem */}
      <line x1="2" y1="9" x2="2" y2="21" />
      {/* The 'i' dot */}
      <circle cx="2" cy="4" r="1" />
    </svg>
  );
};
