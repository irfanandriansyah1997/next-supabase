import { css, injectGlobal } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  SPACING_LEVEL_4,
  SPACING_LEVEL_5,
  SPACING_LEVEL_6
} from '@/styles/constant/spacing';
import { hexToRgba } from '@/utils/general/color';

injectGlobal`
  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${hexToRgba(COLOR_PALLETE.black, 0.2)};
    height: 10px;
    border: 5px solid transparent;
    background-clip: padding-box;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-button {
    background-color: transparent;
  }

  ::-webkit-scrollbar-corner {
    border-radius: 5px;
  }
`;

export const styTaskList = css`
  padding: ${SPACING_LEVEL_6} 0;
  padding-right: ${SPACING_LEVEL_6};
  padding-left: 0;
  flex: 1;
  height: 100%;
  overflow-y: scroll;
`;

export const styTaskGrid = css`
  ${styTaskList};
  display: flex;
  gap: ${SPACING_LEVEL_5};

  > div {
    > div {
      margin-top: ${SPACING_LEVEL_4};

      &:first-child {
        margin: 0;
      }
    }
  }
`;
