import { withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <div>Notes Page</div>;
};

export const getServerSideProps = withAuthRequired({ redirectTo: '/login' });

export default Home;
