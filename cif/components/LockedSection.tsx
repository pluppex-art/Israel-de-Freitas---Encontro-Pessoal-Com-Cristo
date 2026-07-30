import React from 'react';
import { useVslPlayerContext } from '../context/VslPlayerContext.tsx';

interface LockedSectionProps {
  children: React.ReactNode;
}

export const LockedSection: React.FC<LockedSectionProps> = ({ children }) => {
  const { isUnlocked } = useVslPlayerContext();

  if (isUnlocked) return <>{children}</>;

  return (
    <div className="relative">
      <div className="pointer-events-none select-none blur-md opacity-40" aria-hidden="true">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-offWhite/70 backdrop-blur-[2px] px-4">
        <div className="bg-asphalt text-white rounded-2xl px-8 py-7 text-center max-w-sm shadow-2xl">
          <svg className="w-8 h-8 text-amber mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <p className="font-semibold text-sm md:text-base">
            Continue assistindo ao vídeo acima para liberar esta seção.
          </p>
        </div>
      </div>
    </div>
  );
};
