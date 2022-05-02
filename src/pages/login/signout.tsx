import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * Sign Out Page
 *
 * @since 0.0.0
 * @returns {JSX.Element} rendered react component
 */
const SignOutPage = () => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading) {
      if (!user) router.push('/login');
      else if (user) supabaseClient.auth.signOut();
    }
  }, [user, isLoading, router]);

  return null;
};

export default SignOutPage;
