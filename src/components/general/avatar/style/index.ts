import { css } from '@emotion/css';

import { pxToRem } from '@/utils/general/style';

interface StyAvatarArgs {
  shape: 'circle' | 'rounded' | 'rectangle';
  size: number | string;
}

export const styAvatar = (props: StyAvatarArgs) => {
  const { shape, size } = props;

  let formattedBorderRadius = '0px';

  switch (shape) {
    case 'circle':
      formattedBorderRadius = '50%';
      break;

    case 'rectangle':
      formattedBorderRadius = '0px';
      break;

    case 'rounded':
      formattedBorderRadius = '8px';
      break;
  }

  return css`
    width: ${typeof size === 'string' ? size : pxToRem(size)};
    height: ${typeof size === 'string' ? size : pxToRem(size)};
    object-fit: cover;
    border-radius: ${formattedBorderRadius};
  `;
};
