import { css } from '@emotion/css';

import { BOX_SHADOW_4dp } from '@/styles/constant/box-shadow';
import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  SPACING_LEVEL_1,
  SPACING_LEVEL_4,
  SPACING_LEVEL_5,
  SPACING_LEVEL_7
} from '@/styles/constant/spacing';
import { EASE_IN_OUT } from '@/styles/constant/transition';
import { CAPTION_FONT_SIZE, LINE_HEIGHT_2 } from '@/styles/constant/typography';
import { hexToRgba } from '@/utils/general/color';
import { pxToRem } from '@/utils/general/style';

export const styNotesCalendar = (loading: boolean) => css`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background: ${COLOR_PALLETE.white};
  box-shadow: ${BOX_SHADOW_4dp};
  padding-top: ${SPACING_LEVEL_7};

  > h1 {
    letter-spacing: 0.5px;
  }

  .heading {
    padding: 0 ${SPACING_LEVEL_5};
  }

  > div,
  > h1 {
    opacity: ${loading ? 0.5 : 1};
    transition: all ${EASE_IN_OUT} 0.3s;
  }
`;

export const styNotesCalendarItem = (isActive = false) => css`
  width: 100%;
  height: 93px;
  cursor: pointer;
  display: flex;
  align-items: center;

  .title {
    width: 80px;
    position: relative;
    padding: 0 ${SPACING_LEVEL_4};

    h3 {
      letter-spacing: ${pxToRem(-2)};

      &::before {
        content: '#';
        position: absolute;
        top: 0;
        font-size: ${CAPTION_FONT_SIZE};
        line-height: ${LINE_HEIGHT_2};
        color: ${hexToRgba(COLOR_PALLETE.text, 0.5)};
        left: 10px;
        font-weight: 700;
      }
    }
  }

  > section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-sizing: content-box;
    height: 60px;
    padding: ${SPACING_LEVEL_5} 0 ${SPACING_LEVEL_5} ${SPACING_LEVEL_5};
    flex: 1;
    border-bottom: 1px solid ${hexToRgba(COLOR_PALLETE.gray, 0.5)};

    ${isActive &&
    css`
      border-color: ${hexToRgba(COLOR_PALLETE.title, 0.5)};
    `}

    > p {
      margin-top: ${SPACING_LEVEL_1};
    }
  }
`;
