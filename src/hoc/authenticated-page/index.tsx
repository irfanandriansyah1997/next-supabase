import type { User } from '@supabase/supabase-js';
import { FC, useMemo } from 'react';

import Header from '@/components/general/header';
import Sidebar from '@/components/general/sidebar';
import UserContext from '@/context/user';
import { UserTypes } from '@/types/user';
import { normalizeUser } from '@/utils/supabase/auth';

import { styApps } from './style';

interface WrappedComponentProps {
  user: User;
}

/**
 * With Authenticated Page
 *
 * @param {FC} Component - react component will be wrap authenticated page HOC
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {FC} wrapped component
 */
const withAuthenticatedPageWrapper = (Component: FC) => {
  const WrappedComponent = (props: WrappedComponentProps) => {
    const { user } = props;

    const contextValue: UserTypes = useMemo(() => {
      return normalizeUser(user);
    }, [user]);

    return (
      <UserContext.Provider value={contextValue}>
        <div className={styApps}>
          <Sidebar />
          <div className="apps-content">
            <Header avatar={contextValue.avatar} name={contextValue.name} />
            <Component {...(props as any)} />
          </div>
        </div>
      </UserContext.Provider>
    );
  };

  WrappedComponent.displayName = `withAuthenticatedPage(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};

export default withAuthenticatedPageWrapper;
