import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_3, SPACING_LEVEL_7 } from '@/styles/constant/spacing';

export const styDayOffMessage = css`
  align-items: center;
  background: ${COLOR_PALLETE.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 32px;
  position: relative;
  width: 100%;

  img {
    margin-bottom: ${SPACING_LEVEL_7};
  }

  > p {
    margin-bottom: ${SPACING_LEVEL_3};
    height: 46px;
    width: 100%;
    text-align: center;
  }

  > span {
    width: 60%;
    height: 68px;
  }
`;
