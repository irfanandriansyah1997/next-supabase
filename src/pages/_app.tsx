import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();

  return (
    <UserProvider supabaseClient={supabaseClient} pathname={pathname}>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
