import React, { createContext, useContext } from 'react';

interface VslPlayerContextValue {
  isUnlocked: boolean;
  fakeProgress: number;
}

const VslPlayerContext = createContext<VslPlayerContextValue>({
  isUnlocked: false,
  fakeProgress: 0,
});

export const VslPlayerProvider: React.FC<{
  value: VslPlayerContextValue;
  children: React.ReactNode;
}> = ({ value, children }) => (
  <VslPlayerContext.Provider value={value}>{children}</VslPlayerContext.Provider>
);

export function useVslPlayerContext(): VslPlayerContextValue {
  return useContext(VslPlayerContext);
}
