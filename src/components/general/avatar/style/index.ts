import { css } from '@emotion/css';

interface StyAvatarArgs {
  shape: 'circle' | 'rounded' | 'rectangle';
}

export const styAvatar = (props: StyAvatarArgs) => {
  const { shape } = props;

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
    object-fit: cover;
    border-radius: ${formattedBorderRadius};
  `;
};
