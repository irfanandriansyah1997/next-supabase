import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  SPACING_LEVEL_2,
  SPACING_LEVEL_4,
  SPACING_LEVEL_5,
  SPACING_LEVEL_7
} from '@/styles/constant/spacing';
import { EASE_IN_OUT } from '@/styles/constant/transition';

export const styNotesHeading = css`
  align-items: flex-end;
  background: ${COLOR_PALLETE.white};
  display: flex;
  justify-content: space-between;
  padding: ${SPACING_LEVEL_7} ${SPACING_LEVEL_7} ${SPACING_LEVEL_5};

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

export const styNotesNavigation = css`
  background: ${COLOR_PALLETE.white};
  padding: 0 ${SPACING_LEVEL_7};

  > ul {
    align-items: center;
    display: flex;
    list-style: none;

    li {
      margin: 0 ${SPACING_LEVEL_2};
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all ${EASE_IN_OUT} 0.3s;

      &.active,
      &:hover {
        border-color: ${COLOR_PALLETE.title};

        > p {
          color: ${COLOR_PALLETE.title};
        }
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      > p {
        padding: ${SPACING_LEVEL_4};
        color: ${COLOR_PALLETE.text};
      }
    }
  }
`;
