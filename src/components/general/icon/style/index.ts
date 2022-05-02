import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { LiteralUnion } from '@/types/general';
import { pxToRem } from '@/utils/general/style';

interface StyIconArgs {
  color?: LiteralUnion<keyof typeof COLOR_PALLETE, string>;
  size: string | number;
}

export const styIcon = (args: StyIconArgs) => css`
  font-size: ${typeof args.size === 'number' ? pxToRem(args.size) : args.size};
  ${args.color &&
  css`
    color: ${Object.prototype.hasOwnProperty.call(COLOR_PALLETE, args.color)
      ? COLOR_PALLETE[args.color as keyof typeof COLOR_PALLETE]
      : args.color};
  `}
`;
