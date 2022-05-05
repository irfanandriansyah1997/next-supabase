import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_3 } from '@/styles/constant/spacing';
import { hexToRgba } from '@/utils/general/color';

export const styDropdownListItem = css`
  display: flex;
  align-items: center;
  padding: ${SPACING_LEVEL_3};
  cursor: pointer;

  &:hover {
    background-color: ${hexToRgba(COLOR_PALLETE.gray, 0.25)};
  }

  > span {
    width: 24px;
    height: 24px;
    background-color: ${COLOR_PALLETE.secondary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${SPACING_LEVEL_3};
  }
`;
