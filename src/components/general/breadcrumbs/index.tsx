import { useRouter } from 'next/router';
import { Fragment, useEffect, useMemo } from 'react';

import Icon from '@/components/general/icon';
import Link from '@/components/general/link';
import Text from '@/components/general/text';

import { styBreadcrumb } from './style';
import type { BreadcrumbItemTypes } from './types';

/**
 * Breadcrumbs Component
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} rendered breadcrumbs component
 */
const Breadcrumbs = () => {
  const router = useRouter();
  const breadcrumbItems = useMemo(() => {
    let response: BreadcrumbItemTypes[] = [];
    const [urlPath] = router.asPath.split('?');
    const splittedUrl = urlPath
      .split('/')
      .filter((item) => Boolean(item.length));

    response.push(
      { href: '/', isLastPath: false, text: 'Master' },
      ...splittedUrl.map((item, idx): BreadcrumbItemTypes => {
        const href = `/${splittedUrl.slice(0, idx + 1).join('/')}`;
        const text = item
          .toLowerCase()
          .split('-')
          .map(
            (item) => `${item[0].toUpperCase()}${item.slice(1, item.length)}`
          )
          .join(' ');

        return {
          href: idx + 1 === splittedUrl.length ? undefined : href,
          isLastPath: idx + 1 === splittedUrl.length,
          text
        };
      })
    );

    return response;
  }, [router.asPath]);

  useEffect(() => {
    console.debug(breadcrumbItems);
  }, [breadcrumbItems]);

  return (
    <div className={styBreadcrumb}>
      {breadcrumbItems.map(({ href, text }) => {
        if (href)
          return (
            <Fragment key={`${text}-${href}`}>
              <Link href={href}>
                <Text tag="p" color="title" fontSize="text" fontWeight={500}>
                  {text}
                </Text>
              </Link>
              <Icon
                icon="chevron_right"
                color="title"
                className="breadcrumb-icon"
              />
            </Fragment>
          );

        return (
          <Text tag="p" key={`${text}-${href || 'no-link'}`} fontSize="text">
            {text}
          </Text>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
