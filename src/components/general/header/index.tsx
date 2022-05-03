import Breadcrumbs from '../breadcrumbs';
import { styHeader } from './style';

/**
 * Header Component
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} rendered header component
 */
const Header = () => (
  <div className={styHeader}>
    <Breadcrumbs />
  </div>
);

export default Header;
