import { FC } from 'react';

import Sidebar from '@/components/general/sidebar';

import { styApps } from './style';

/**
 * With Authenticated Page
 *
 * @param {FC} Component - react component will be wrap authenticated page HOC
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {FC} wrapped component
 */
const withAuthenticatedPageWrapper = (Component: FC) => {
  const WrappedComponent = (props: any) => {
    return (
      <div className={styApps}>
        <Sidebar />
        <Component {...props} />
      </div>
    );
  };
  WrappedComponent.displayName = `withAuthenticatedPage(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};

export default withAuthenticatedPageWrapper;
