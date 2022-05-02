import { getUser } from '@supabase/supabase-auth-helpers/nextjs';
import { GetServerSideProps } from 'next';

import LoginPageContainer from '@/components/login';

const LoginPage = () => {
  return <LoginPageContainer />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = await getUser(ctx);

  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {},
    redirect: ''
  };
};

export default LoginPage;
