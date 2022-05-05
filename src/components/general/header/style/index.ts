import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_3 } from '@/styles/constant/spacing';

export const styHeader = css`
  align-items: center;
  background-color: ${COLOR_PALLETE.white};
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 32px;
  width: 100%;
`;

export const styHeaderAccount = css`
  align-items: center;
  display: flex;

  > section {
    margin-left: ${SPACING_LEVEL_3};
  }
`;
