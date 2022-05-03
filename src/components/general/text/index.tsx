import { cx } from '@emotion/css';
import { createElement } from 'react';

import { styText } from './style';
import type { TextProps } from './types';

/**
 * Text Component
 *
 * @param {Partial<TextProps>} props - text props interface
 * @since 0.0.0
 * @returns {JSX.Element} rendered text component
 */
const Text = (props: TextProps) => {
  const {
    className,
    color = 'text',
    fontSize = 'normal',
    fontWeight = 400,
    lineHeight = 'preset-3',
    tag = 'p',
    textAlign = 'inherit',
    ...res
  } = props;

  return createElement(tag, {
    ...res,
    className: cx(
      styText({
        color,
        fontSize,
        fontWeight,
        lineHeight,
        textAlign
      }),
      className
    )
  });
};

export default Text;
