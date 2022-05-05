import { css } from '@emotion/css';

import { BOX_SHADOW_24dp } from '@/styles/constant/box-shadow';
import { COLOR_PALLETE } from '@/styles/constant/color';

export const styDropdown = css`
  position: relative;

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-enter-done {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active,
  .fade-exit-done {
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }
`;

export const styDropdownContent = css`
  position: absolute;
  display: block;
  background: ${COLOR_PALLETE.white};
  border-radius: 5px;
  box-shadow: ${BOX_SHADOW_24dp};
  z-index: 1;
  width: max-content;
`;
