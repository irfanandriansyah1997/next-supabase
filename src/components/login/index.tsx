import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useUser } from '@supabase/supabase-auth-helpers/react';

import LoginForm from './form';

/**
 * Login Page Container
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} rendered react component
 */
const LoginPageContainer = () => {
  const { error, user } = useUser();

  if (!user)
    return (
      <>
        {error && <p>{error.message}</p>}
        <LoginForm />
      </>
    );

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
    </>
  );
};

export default LoginPageContainer;
