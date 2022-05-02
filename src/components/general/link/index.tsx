import { cx } from '@emotion/css';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  cloneElement,
  ComponentProps,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState
} from 'react';
import { Children } from 'react';

interface LinkProps extends ComponentProps<typeof NextLink> {
  activeClassName?: string;
  className?: string;
}

/**
 * Link Component
 *
 * @param {PropsWithChildren<LinkProps>} props - link props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description custom link component override default behaviour from next link component
 * @since 0.0.0
 * @returns {JSX.Element} rendered link component
 */
const Link = (props: PropsWithChildren<LinkProps>) => {
  const { activeClassName = 'active', children, ...res } = props;
  const { asPath, isReady } = useRouter();

  const child = Children.only(children);
  const childClassName = (child as Record<string, any>)?.props?.className || '';
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    if (isReady) {
      const linkPathName = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname;
      const activePathName = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathName === activePathName
          ? cx(childClassName, activeClassName)
          : childClassName;

      if (newClassName !== className) setClassName(newClassName);
    }
  }, [
    activeClassName,
    asPath,
    childClassName,
    className,
    isReady,
    props.as,
    props.href
  ]);

  return (
    <NextLink {...res}>
      <a style={{ textDecoration: 'none' }} className={res.className}>
        {cloneElement(child as ReactElement<any, string>, {
          className: className || null
        })}
      </a>
    </NextLink>
  );
};

export default Link;
