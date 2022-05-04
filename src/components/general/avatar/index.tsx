import { cx } from '@emotion/css';
import Image from 'next/image';

import { styAvatar } from './style';

interface AvatarProps {
  alt: string;
  className?: string;
  shape?: 'circle' | 'rounded' | 'rectangle';
  size: number | string;
  src: string;
}

/**
 * Avatar Component
 *
 * @param {AvatarProps} props - avatar props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} avatar html
 */
const Avatar = (props: AvatarProps) => {
  const { alt, className, shape = 'circle', size, src } = props;

  return (
    <Image
      alt={alt}
      src={src}
      width={size}
      height={size}
      className={cx(
        className,
        styAvatar({
          shape
        })
      )}
    />
  );
};

export default Avatar;
