import { css } from '@emotion/css';

import { BOX_SHADOW_12dp } from '@/styles/constant/box-shadow';
import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_9 } from '@/styles/constant/spacing';

export const styApps = css`
  align-items: flex-start;
  background-color: ${COLOR_PALLETE.lightGray};
  border-radius: 10px;
  box-shadow: ${BOX_SHADOW_12dp};
  display: flex;
  margin: ${SPACING_LEVEL_9} auto;
  min-height: calc(100vh - 120px);
  min-width: 1000px;
  overflow: hidden;
  padding-left: 75px;
  position: relative;
  width: 90%;

  .apps-content {
    flex: 1;
  }
`;
