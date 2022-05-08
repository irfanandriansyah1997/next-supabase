import { css } from '@emotion/css';

import { BOX_SHADOW_12dp } from '@/styles/constant/box-shadow';
import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  SPACING_LEVEL_3,
  SPACING_LEVEL_4,
  SPACING_LEVEL_5,
  SPACING_LEVEL_6,
  SPACING_LEVEL_7
} from '@/styles/constant/spacing';
import { PRIMARY_FONT } from '@/styles/constant/typography';
import { hexToRgba } from '@/utils/general/color';

export const styDialogTaskBackdrop = css`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${hexToRgba(COLOR_PALLETE.black, 0.5)};
  z-index: 60;
`;

export const styDialogTask = css`
  position: absolute;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  top: 50px;
  left: 50%;
  height: max-contain;
  background-color: ${COLOR_PALLETE.white};
  z-index: 60;
  transform: translateX(-50%);
  box-shadow: ${BOX_SHADOW_12dp};

  .heading {
    display: flex;
    align-items: center;
    padding: ${SPACING_LEVEL_7} ${SPACING_LEVEL_7} 0;
  }

  .content {
    padding: ${SPACING_LEVEL_7};
  }

  .footer {
    padding: ${SPACING_LEVEL_6} ${SPACING_LEVEL_7};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${SPACING_LEVEL_3};
    border-top: 1px solid ${COLOR_PALLETE.gray};

    .primary,
    .secondary {
      padding: ${SPACING_LEVEL_3} ${SPACING_LEVEL_4};
      background: transparent;
      border: 0;
      font-family: ${PRIMARY_FONT};
      border-radius: 8px;
    }

    .primary {
      color: ${COLOR_PALLETE.white};
      background-color: ${COLOR_PALLETE.primary};
      font-weight: 600;
    }

    .secondary {
      color: ${COLOR_PALLETE.text};
      font-weight: 500;
    }
  }

  .custom-field,
  .half-field {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${SPACING_LEVEL_5};
  }

  .custom-field {
    &__item {
      flex: 1;
    }
  }

  .half-field {
    &__item {
      flex: 1;
      margin: 0;
    }
  }
`;
