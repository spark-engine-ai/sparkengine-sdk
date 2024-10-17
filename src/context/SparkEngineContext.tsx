"use client";
import React, { createContext, useContext } from 'react';
import { MantineProvider, MantineProviderProps } from '@mantine/core';

const SparkEngineContext = createContext<undefined>(undefined);

interface SparkEngineProviderProps extends MantineProviderProps {
  children: React.ReactNode;
}

export const SparkEngineProvider: React.FC<SparkEngineProviderProps> = ({
  children,
  ...mantineProps
}) => {
  return (
    <MantineProvider {...mantineProps} forceColorScheme='light'>
      {children}
    </MantineProvider>
  );
};

export const useSparkEngine = (): void => {
  const context = useContext(SparkEngineContext);
  if (!context) {
    throw new Error('useSparkEngine must be used within a SparkEngineProvider');
  }
};
