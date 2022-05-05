import { cx } from '@emotion/css';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import Text from '@/components/general/text';
import { COLOR_PALLETE } from '@/styles/constant/color';
import { hexToRgba } from '@/utils/general/color';

import { styBadge } from './style';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Badge Component
 *
 * @param {PropsWithChildren<BadgeProps>} props - badge props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} badge html element
 */
const Badge = (props: PropsWithChildren<BadgeProps>) => {
  const { children, className, ...res } = props;

  return (
    <div {...res} className={cx(styBadge, className)}>
      <Text
        className="time"
        tag="span"
        fontSize="small"
        fontWeight={600}
        color={hexToRgba(COLOR_PALLETE.title, 0.5)}
        lineHeight="preset-6"
      >
        {children}
      </Text>
    </div>
  );
};

export default Badge;
