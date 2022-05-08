import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * With React Portal
 *
 * @param {FC} Component - react component will be wrap react portal
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {FC} wrapped component
 */
export function withReactPortal<T>(Component: (props: T) => JSX.Element) {
  const WrappedComponent = (props: T) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') setMounted(true);

      return () => {
        setMounted(false);
      };
    }, []);

    return mounted
      ? createPortal(
          <Component {...props} />,
          document.querySelector('#react-portal') as Element
        )
      : null;
  };

  WrappedComponent.displayName = `withReactPortal(${
    (Component as FC).displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
}
