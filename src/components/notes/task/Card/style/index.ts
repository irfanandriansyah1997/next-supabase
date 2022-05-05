import { css } from '@emotion/css';

import { BOX_SHADOW_4dp, BOX_SHADOW_24dp } from '@/styles/constant/box-shadow';
import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  SPACING_LEVEL_2,
  SPACING_LEVEL_3,
  SPACING_LEVEL_4,
  SPACING_LEVEL_5
} from '@/styles/constant/spacing';
import { EASE_IN_OUT } from '@/styles/constant/transition';
import { TodoStatusTaskEnum } from '@/types/notes';
import { pxToRem } from '@/utils/general/style';

export const styTaskCardItem = (status: TodoStatusTaskEnum | undefined) => css`
  padding: ${SPACING_LEVEL_4};
  background-color: ${COLOR_PALLETE.white};
  box-shadow: ${BOX_SHADOW_4dp};
  transition: all ${EASE_IN_OUT} 0.3s;
  border-radius: 8px;
  position: relative;

  &:hover {
    box-shadow: ${BOX_SHADOW_24dp};
  }

  ${status === TodoStatusTaskEnum.WontDo &&
  css`
    .desc-task {
      text-decoration: line-through;
      opacity: 0.5;
    }
  `}

  .category {
    display: flex;
    align-items: center;
    margin-bottom: ${SPACING_LEVEL_5};

    img {
      min-width: initial !important;
      max-width: initial !important;
      min-height: initial !important;
      max-height: initial !important;
      width: ${pxToRem(16)} !important;
      height: ${pxToRem(16)} !important;
    }

    p {
      margin-left: ${SPACING_LEVEL_2};
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    margin-top: ${SPACING_LEVEL_5};
  }

  .dropdown {
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 10px;

    &-toggle {
      margin-left: ${SPACING_LEVEL_3};

      &--active {
        cursor: pointer;
      }
    }
  }
`;
