import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_4, SPACING_LEVEL_7 } from '@/styles/constant/spacing';

export const styNotesHeading = css`
  align-items: flex-end;
  background: ${COLOR_PALLETE.white};
  display: flex;
  justify-content: space-between;
  padding: ${SPACING_LEVEL_7};

  .link,
  .icon {
    cursor: pointer;
  }

  section {
    display: flex;
    align-items: center;
    grid-gap: ${SPACING_LEVEL_4};
  }
`;
