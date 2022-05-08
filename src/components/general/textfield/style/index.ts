import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_3, SPACING_LEVEL_6 } from '@/styles/constant/spacing';
import { EASE_IN_OUT } from '@/styles/constant/transition';
import { PRIMARY_FONT, TEXT_FONT_SIZE } from '@/styles/constant/typography';
import { hexToRgba } from '@/utils/general/color';

export const styTextfieldWrapper = css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING_LEVEL_6};

  > label {
    margin-bottom: ${SPACING_LEVEL_3};

    span {
      color: ${COLOR_PALLETE.red};
    }
  }

  .message {
    b {
      font-weight: 600;
    }
  }
`;

export const styTextfield = css`
  border: 1px solid ${COLOR_PALLETE.gray};
  padding: ${SPACING_LEVEL_3};
  font-family: ${PRIMARY_FONT};
  font-size: ${TEXT_FONT_SIZE};
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${COLOR_PALLETE.text};
  border-radius: 8px;
  transition: all ${EASE_IN_OUT} 0.3s;

  &:focus {
    box-shadow: 0 0 0 3px ${hexToRgba(COLOR_PALLETE.black, 0.05)};
  }
`;
