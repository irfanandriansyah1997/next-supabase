import { withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MainPage: NextPage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    replace('/account');
  }, [replace]);

  return null;
};

export const getServerSideProps = withAuthRequired({ redirectTo: '/login' });

export default MainPage;
