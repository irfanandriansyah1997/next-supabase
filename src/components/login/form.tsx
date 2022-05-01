import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { Auth } from '@supabase/supabase-auth-helpers/react';

/**
 * Login Form
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} rendered react element
 */
const LoginForm = () => {
  return (
    <div
      style={{
        left: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50vw'
      }}
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={['github']}
        socialColors
        onlyThirdPartyProviders
        view="sign_in"
      />
    </div>
  );
};

export default LoginForm;
