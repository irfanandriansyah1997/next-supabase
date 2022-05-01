import { handleAuth } from '@supabase/supabase-auth-helpers/nextjs';

export default handleAuth({
  cookieOptions: { lifetime: 1 * 365 * 24 * 60 * 60 },
  logout: { returnTo: '/signin' } // Keep the user logged in for a year.
});
