import { css } from '@emotion/css';

import type { BaseTextStylingProps } from '@/components/general/text/types';
import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  CAPTION_FONT_SIZE,
  LARGE_FONT_SIZE,
  LINE_HEIGHT_1,
  LINE_HEIGHT_2,
  LINE_HEIGHT_3,
  LINE_HEIGHT_4,
  LINE_HEIGHT_5,
  LINE_HEIGHT_6,
  LINE_HEIGHT_7,
  LINE_HEIGHT_8,
  LINE_HEIGHT_9,
  LINE_HEIGHT_10,
  LINE_HEIGHT_11,
  LINE_HEIGHT_12,
  MEDIUM_FONT_SIZE,
  NORMAL_FONT_SIZE,
  SMALL_FONT_SIZE,
  TEXT_FONT_SIZE,
  TITLE_FONT_SIZE
} from '@/styles/constant/typography';
import { pxToRem } from '@/utils/general/style';

const FONT_SIZE_PRESET = {
  caption: CAPTION_FONT_SIZE,
  large: LARGE_FONT_SIZE,
  medium: MEDIUM_FONT_SIZE,
  normal: NORMAL_FONT_SIZE,
  small: SMALL_FONT_SIZE,
  text: TEXT_FONT_SIZE,
  title: TITLE_FONT_SIZE
};

const LINE_HEIGHT_PRESET = {
  'preset-1': LINE_HEIGHT_1,
  'preset-10': LINE_HEIGHT_10,
  'preset-11': LINE_HEIGHT_11,
  'preset-12': LINE_HEIGHT_12,
  'preset-2': LINE_HEIGHT_2,
  'preset-3': LINE_HEIGHT_3,
  'preset-4': LINE_HEIGHT_4,
  'preset-5': LINE_HEIGHT_5,
  'preset-6': LINE_HEIGHT_6,
  'preset-7': LINE_HEIGHT_7,
  'preset-8': LINE_HEIGHT_8,
  'preset-9': LINE_HEIGHT_9
};

const getConstantValue = (
  constantVar: Record<string, string>,
  value: string | number
): string => {
  if (Object.prototype.hasOwnProperty.call(constantVar, value)) {
    return constantVar[value];
  }

  if (typeof value === 'string') return value;

  return pxToRem(value);
};

export const styText = (props: BaseTextStylingProps) => {
  const { color, fontSize, fontWeight, lineHeight, textAlign } = props;

  return css`
    color: ${Object.prototype.hasOwnProperty.call(COLOR_PALLETE, color)
      ? COLOR_PALLETE[color as keyof typeof COLOR_PALLETE]
      : color};
    font-size: ${getConstantValue(FONT_SIZE_PRESET, fontSize)};
    font-weight: ${fontWeight};
    line-height: ${getConstantValue(LINE_HEIGHT_PRESET, lineHeight)};
    text-align: ${textAlign};
    text-decoration: none;
  `;
};
