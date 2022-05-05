import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_2 } from '@/styles/constant/spacing';
import { hexToRgba } from '@/utils/general/color';

export const styBadge = css`
  padding: ${SPACING_LEVEL_2};
  border-radius: 5px;
  text-align: center;
  background-color: ${hexToRgba(COLOR_PALLETE.gray, 0.5)};
`;
