import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);
