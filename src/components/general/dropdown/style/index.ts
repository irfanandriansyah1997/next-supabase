import { css } from '@emotion/css';

import { fadeAnimaton } from '@/styles/constant/animation';
import { BOX_SHADOW_24dp } from '@/styles/constant/box-shadow';
import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_3 } from '@/styles/constant/spacing';

export const styDropdown = css`
  position: relative;

  ${fadeAnimaton}
`;

export const styDropdownContent = css`
  position: absolute;
  display: block;
  background: ${COLOR_PALLETE.white};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${BOX_SHADOW_24dp};
  z-index: 1;
  width: max-content;
  min-width: 100%;
  top: calc(100% + ${SPACING_LEVEL_3});
`;
