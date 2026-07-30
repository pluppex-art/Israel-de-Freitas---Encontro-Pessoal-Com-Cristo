import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-asphalt py-5">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber flex items-center justify-center font-bold text-asphalt serif">
            IF
          </div>
          <span className="text-white font-semibold tracking-wide text-sm md:text-base">
            Israel de Freitas
          </span>
        </div>
      </div>
    </header>
  );
};
