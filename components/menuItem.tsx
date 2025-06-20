'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const MenuItem = ({
  isActive = false,
  menuTitle,
  menuLink,
  onClick,
}: {
  isActive: boolean;
  menuTitle: string;
  menuLink: string;
  onClick: (id: string) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // When active changes, reset hover state to false (if not active)
  useEffect(() => {
    if (isActive) {
      setIsHovered(false); // Ensure hover doesn't interfere
    }
  }, [isActive]);

  const isHighlighted = isHovered || isActive;

  return (
    <div
      className='flex justify-center items-center space-x-4 uppercase text-xs cursor-pointer'
      onMouseEnter={() => {
        if (!isActive) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (!isActive) setIsHovered(false);
      }}
      onClick={() => {
        const id = menuLink.split('#')[1];
        onClick(id);

        // Scroll manually if needed
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <div
        className={`h-0.5 transition-all ease-in-out duration-500 ${
          isHighlighted ? 'w-16 bg-slate-50' : 'w-8 bg-slate-600'
        }`}
      ></div>
      <p className={`${isHighlighted ? 'text-slate-50' : 'text-slate-600'}`}>
        <Link href={menuLink} scroll={false}>
          {menuTitle}
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;