import { cx } from '@emotion/css';
import type NextLink from 'next/link';
import { ComponentProps } from 'react';

import Icon from '@/components/general/icon';
import Link from '@/components/general/link';
import {
  LARGE_FONT_SIZE,
  MEDIUM_FONT_SIZE
} from '@/styles/constant/typography';

import Text from '../text';
import { stySidebar, stySidebarItem, stySidebarLogo } from './style';

interface SidebarItemProps extends ComponentProps<typeof NextLink> {
  icon: string;
}

/**
 * Sidebar Item Component
 *
 * @param {SidebarItemProps} props - sidebar item props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} sidebar html element
 */
const SidebarItem = (props: SidebarItemProps) => {
  const { icon, ...res } = props;
  return (
    <Link {...res} activeClassName="sidebar-item--active">
      <Icon
        className={cx(stySidebarItem, 'sidebar-item')}
        icon={icon}
        size={MEDIUM_FONT_SIZE}
      />
    </Link>
  );
};

/**
 * Sidebar Component
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} sidebar html element
 */
const Sidebar = () => (
  <div className={stySidebar}>
    <div className={cx(stySidebarLogo)}>
      <Icon icon="check_circle" size={LARGE_FONT_SIZE} color="white" />
    </div>
    <ul>
      <li>
        <SidebarItem href="/account" icon="event_note" />
      </li>
      <li>
        <SidebarItem href="/account/user-profile" icon="account_circle" />
      </li>
    </ul>
    <Link href="/login/signout" className="sidebar-logout">
      <Text tag="p" fontSize="text">
        Logout
      </Text>
    </Link>
  </div>
);

export default Sidebar;
