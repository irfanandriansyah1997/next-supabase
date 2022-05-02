import { useUser } from '@supabase/supabase-auth-helpers/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import LoginForm from './form';

/**
 * Login Page Container
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} rendered react component
 */
const LoginPageContainer = () => {
  const { error, isLoading, user } = useUser();
  const { push } = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        push('/');
        return;
      }
    }
  }, [isLoading, push, user]);

  if (isLoading) return <p>Loading...</p>;

  if (!user)
    return (
      <>
        {error && <p>{error.message}</p>}
        <LoginForm />
      </>
    );

  return null;
};

export default LoginPageContainer;
