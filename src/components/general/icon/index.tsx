import { cx } from '@emotion/css';
import { HTMLAttributes } from 'react';

import type { COLOR_PALLETE } from '@/styles/constant/color';
import { TEXT_FONT_SIZE } from '@/styles/constant/typography';
import { LiteralUnion } from '@/types/general';

import { styIcon } from './style';

/**
 * Icon Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @description for rest of icon example you can see the docs
 * https://fonts.google.com/icons?icon.style=Outlined
 */
interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  color?: LiteralUnion<keyof typeof COLOR_PALLETE, string>;
  icon: string;
  size?: string | number;
}

/**
 * Icon Component
 *
 * @param {IconProps} props - icon props
 * @since 0.0.0
 * @returns {JSX.Element} rendered icon component
 */
const Icon = (props: IconProps) => {
  const { className, color, icon, size = TEXT_FONT_SIZE, ...res } = props;

  return (
    <span
      {...res}
      className={cx(
        'material-symbols-outlined',
        styIcon({
          color,
          size
        }),
        className
      )}
    >
      {icon}
    </span>
  );
};

export default Icon;
