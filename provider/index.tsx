'use client';
import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider, { type IAuthContext } from './auth-provider';
import { Suspense } from 'react';
const Provider = ({
 children,
 session,
}: {
 children: ReactNode;
 session: IAuthContext | undefined;
}) => {
 const [queryClient] = useState(() => new QueryClient());

 return (
  <Suspense>
   <QueryClientProvider client={queryClient}>
    <AuthProvider session={session}>{children}</AuthProvider>
   </QueryClientProvider>
  </Suspense>
 );
};

export default Provider;
