import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import Dropdown from '@/components/general/dropdown';
import Icon from '@/components/general/icon';
import Text from '@/components/general/text';

import { styDropdownListItem } from './style';

type Props = ComponentProps<typeof Dropdown>;

interface DropdownListType {
  (props: Props): JSX.Element;
  Item: (props: PropsWithChildren<DropdownListItemProps>) => JSX.Element;
}

interface DropdownListItemProps {
  icon: ReactNode;
  onClick(): void;
}

/**
 * Dropdown List Component
 *
 * @param {DropdownListItemProps} props - dropdown list item props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} Dropdown list item html element
 */
const DropdownListItem = (props: PropsWithChildren<DropdownListItemProps>) => {
  const { children, icon, onClick } = props;

  return (
    <li className={styDropdownListItem} aria-hidden="true" onClick={onClick}>
      {typeof icon === 'string' ? (
        <Icon size={18} icon={icon} color="white" />
      ) : (
        icon
      )}
      <Text
        tag="p"
        fontSize="text"
        fontWeight={500}
        color="text"
        lineHeight="preset-4"
      >
        {children}
      </Text>
    </li>
  );
};

/**
 * Dropdown List Component
 *
 * @param {Props} props - dropdown props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} Dropdown list html element
 */
const DropdownList: DropdownListType = (props) => {
  const { children, ...res } = props;
  return (
    <Dropdown {...res}>
      <ul>{children}</ul>
    </Dropdown>
  );
};

DropdownList.Item = DropdownListItem;

export default DropdownList;
