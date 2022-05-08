import { css, keyframes } from '@emotion/css';

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

export const shimmerAnimation = keyframes`
from {
  background-position: -400px 0;
}

to {
  background-position: 400px 0; 
}
`;

export const styShimmer = css`
  position: relative;
  background: #e5e5e5;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    #e5e5e5 0%,
    #e0e0e0 10%,
    #d9d9d9 20%,
    #d9d9d9 30%,
    #e0e0e0 40%,
    #e5e5e5 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 200px;

  /* Animation */
  -webkit-animation-duration: 1s;

  /* Specifies style for element when animation isn't playing */
  -webkit-animation-fill-mode: forwards;

  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${shimmerAnimation};
  -webkit-animation-timing-function: ease-in-out;
`;
