import { css } from '@emotion/css';

import { BOX_SHADOW_4dp } from '@/styles/constant/box-shadow';
import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  SPACING_LEVEL_3,
  SPACING_LEVEL_4,
  SPACING_LEVEL_5
} from '@/styles/constant/spacing';
import { hexToRgba } from '@/utils/general/color';

export const styNotesCategory = css`
  width: 332px;
  flex: 0 0 332px;
  position: relative;
  height: 100%;
  padding: ${SPACING_LEVEL_5} ${SPACING_LEVEL_5};

  .heading {
    padding: ${SPACING_LEVEL_5};
  }
`;

interface StyProgressArgs {
  from: number;
  start: number;
}

export const styProgress = (args: StyProgressArgs) => {
  const { from, start } = args;

  return css`
    width: 100%;
    padding: 0 ${SPACING_LEVEL_5};
    margin: ${SPACING_LEVEL_3} 0;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${SPACING_LEVEL_3};
    }

    > section {
      width: 100%;
      height: 5px;
      border-radius: 5px;
      overflow: hidden;
      position: relative;

      &:after,
      &:before {
        content: '';
        height: 100%;
        display: block;
        position: absolute;
      }

      &:after {
        width: 100%;
        background-color: ${hexToRgba(COLOR_PALLETE.black, 0.05)};
      }

      &:before {
        z-index: 1;
        border-radius: 5px;
        width: calc(${(start / from) * 100}%);
        background-color: ${COLOR_PALLETE.secondary};
      }
    }
  `;
};

export const styNotesCategoryContent = css`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 ${SPACING_LEVEL_3};

  > section {
    padding: ${SPACING_LEVEL_5};
    flex: 0 0 calc(50% - 16px);
    background: ${COLOR_PALLETE.white};
    border-radius: 8px;
    margin: ${SPACING_LEVEL_3};
    box-shadow: ${BOX_SHADOW_4dp};

    > p {
      margin-top: ${SPACING_LEVEL_4};
    }
  }
`;
