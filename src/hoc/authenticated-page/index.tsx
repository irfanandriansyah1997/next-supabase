import type { User } from '@supabase/supabase-js';
import { FC } from 'react';

import Header from '@/components/general/header';
import Sidebar from '@/components/general/sidebar';

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
    console.debug(user);

    return (
      <div className={styApps}>
        <Sidebar />
        <div className="apps-content">
          <Header />
          <Component {...(props as any)} />
        </div>
      </div>
    );
  };
  WrappedComponent.displayName = `withAuthenticatedPage(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};

export default withAuthenticatedPageWrapper;
