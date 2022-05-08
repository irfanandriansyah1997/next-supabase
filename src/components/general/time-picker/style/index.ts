import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { PRIMARY_FONT, TEXT_FONT_SIZE } from '@/styles/constant/typography';
import { hexToRgba } from '@/utils/general/color';

export const styTimePicker = css`
  width: 100%;
  --main-box-shadow: transparent;
  --main-bg: white;
  --main-font-family: ${PRIMARY_FONT};

  --top-bg: white;
  --top-colon-color: ${COLOR_PALLETE.text};
  --top-text-color: ${COLOR_PALLETE.text};
  --top-selected-color: ${COLOR_PALLETE.secondary};
  --top-meridiem-color: ${COLOR_PALLETE.text};

  --dropdown-border: 1px solid ${COLOR_PALLETE.lightGray};
  --dropdown-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  --dropdown-text-color: ${COLOR_PALLETE.text};
  --dropdown-text-color-disabled: #ddd;
  --dropdown-hover-bg: #eaf8ff;

  --clock-wrapper-bg: ${COLOR_PALLETE.lightGray};
  --clock-bg: white;

  --hand-line-color: #d1e1ff;
  --hand-circle-center: #d1e1ff;
  --hand-circle-outer: #d1e1ff;
  --hand-minute-circle: #ade2fb;

  --numbers-text-color: ${hexToRgba(COLOR_PALLETE.text, 0.75)};
  --numbers-text-color-disabled: ${COLOR_PALLETE.lightGray};
  --numbers-font-size-reg: 16px;
  --numbers-font-size-inner: 15px;
  --numbers-font-size-outer: 13px;

  --meridiem-bg-color: white;
  --meridiem-text-color: #898989;
  --meridiem-selected-bg-color: #e1eff6;
  --meridiem-selected-text-color: #898989;

  --done-bg-color: ${COLOR_PALLETE.secondary};
  --done-text-color: ${COLOR_PALLETE.white};
  --done-border-top: 0px solid transparent;
  --done-font-size: ${TEXT_FONT_SIZE};
  --done-font-weight: 500;
`;
