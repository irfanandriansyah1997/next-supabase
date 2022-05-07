import { css } from '@emotion/css';

import { EASE_IN_OUT } from './transition';

export const fadeAnimaton = css`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-enter-done {
    opacity: 1;
    transition: opacity ${EASE_IN_OUT} 300ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active,
  .fade-exit-done {
    opacity: 0;
    transition: opacity ${EASE_IN_OUT} 300ms;
  }
`;
