import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  SPACING_LEVEL_2,
  SPACING_LEVEL_3,
  SPACING_LEVEL_4,
  SPACING_LEVEL_5
} from '@/styles/constant/spacing';
import { EASE_LINEAR } from '@/styles/constant/transition';
import { TodoStatusTaskEnum } from '@/types/notes';
import { pxToRem } from '@/utils/general/style';

export const styTaskListItem = (status: TodoStatusTaskEnum | undefined) => {
  return css`
    display: flex;
    align-items: center;
    margin: ${SPACING_LEVEL_5} 0;
    justify-content: space-between;
    position: relative;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    > section {
      display: flex;
      align-items: center;

      p {
        width: 85px;
        margin-right: 20px;
      }

      span {
        width: 225px;
        max-width: 225px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      ${status === TodoStatusTaskEnum.WontDo &&
      css`
        p,
        span {
          text-decoration: line-through;
          opacity: 0.5;
        }
      `}
    }

    .category {
      display: flex;

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

    .badge {
      width: 130px;
      margin-left: ${SPACING_LEVEL_3};
    }

    .dropdown-toggle {
      margin-left: ${SPACING_LEVEL_3};

      &--active {
        cursor: pointer;
      }
    }
  `;
};

export const styCheckbox = (status: TodoStatusTaskEnum | undefined) => {
  return css`
    position: relative;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin-right: ${SPACING_LEVEL_4};
    border: 2px solid transparent;
    transition: background ${EASE_LINEAR} 0.3s;
    ${status !== TodoStatusTaskEnum.WontDo &&
    status !== TodoStatusTaskEnum.Done &&
    css`
      border-color: ${COLOR_PALLETE.gray};
    `}
    ${status === TodoStatusTaskEnum.WontDo &&
    css`
      background-color: ${COLOR_PALLETE.gray};
    `}
      ${status === TodoStatusTaskEnum.Done &&
    css`
      background-color: ${COLOR_PALLETE.title};
    `}
    ${status !== TodoStatusTaskEnum.WontDo &&
    css`
      cursor: pointer;
    `}

    &:before,
    &:after {
      position: absolute;
      content: '';
      transition: background ${EASE_LINEAR} 0.3s;
      ${status === TodoStatusTaskEnum.WontDo &&
      css`
        display: none;
      `}
      ${status !== TodoStatusTaskEnum.WontDo &&
      status !== TodoStatusTaskEnum.Done &&
      css`
        opacity: 0;
      `}
    }

    &:before {
      width: 6px;
      height: 2px;
      background-color: ${COLOR_PALLETE.white};
      transform: rotate(45deg);
      top: 9px;
      left: 2px;
    }

    &:after {
      width: 15px;
      height: 2px;
      background-color: ${COLOR_PALLETE.white};
      transform: rotate(-45deg);
      top: 6px;
      left: 4px;
    }

    &:hover {
      ${status === TodoStatusTaskEnum.Done &&
      css`
        border-color: ${COLOR_PALLETE.gray};
        background: transparent;
      `}

      ${status !== TodoStatusTaskEnum.WontDo &&
      status !== TodoStatusTaskEnum.Done &&
      css`
        background-color: ${COLOR_PALLETE.title};
        border-color: ${COLOR_PALLETE.title};
      `}

      &::before,
      &::after {
        ${status !== TodoStatusTaskEnum.WontDo &&
        status !== TodoStatusTaskEnum.Done &&
        css`
          opacity: 1;
          background-color: ${COLOR_PALLETE.white};
        `}

        ${status === TodoStatusTaskEnum.Done &&
        css`
          opacity: 0;
        `}
      }
    }
  `;
};
