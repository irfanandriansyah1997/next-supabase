import { withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs';
import type { NextPage } from 'next';

import NotesPageContainer from '@/components/notes';
import withAuthenticatedPageWrapper from '@/hoc/authenticated-page';

const HomePage: NextPage = () => {
  return <NotesPageContainer />;
};

export const getServerSideProps = withAuthRequired({ redirectTo: '/login' });

export default withAuthenticatedPageWrapper(HomePage);
