import Avatar from '@/components/general/avatar';
import Breadcrumbs from '@/components/general/breadcrumbs';
import Text from '@/components/general/text';

import { styHeader, styHeaderAccount } from './style';

/**
 * Header Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
interface HeaderProps {
  avatar: string;
  name: string;
}

/**
 * Header Component
 *
 * @param {HeaderProps} props - header props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} rendered header component
 */
const Header = (props: HeaderProps) => {
  const { avatar, name } = props;
  return (
    <div className={styHeader}>
      <Breadcrumbs />
      <div className={styHeaderAccount}>
        <Avatar alt={name} src={avatar} size={32} className="image" />
        <section>
          <Text
            tag="p"
            color="title"
            fontWeight={600}
            fontSize="text"
            lineHeight="preset-3"
          >
            {name}
          </Text>
          <Text tag="p" fontSize="small" color="primary" lineHeight="preset-1">
            Member
          </Text>
        </section>
      </div>
    </div>
  );
};

export default Header;
