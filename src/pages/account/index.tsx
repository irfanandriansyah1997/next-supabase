import { withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs';
import type { NextPage } from 'next';

import withAuthenticatedPageWrapper from '@/hoc/authenticated-page';

const HomePage: NextPage = () => {
  return <div>Notes Page</div>;
};

export const getServerSideProps = withAuthRequired({ redirectTo: '/login' });

export default withAuthenticatedPageWrapper(HomePage);
