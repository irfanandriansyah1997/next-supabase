import { Property } from 'csstype';
import { HTMLAttributes } from 'react';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { LiteralUnion } from '@/types/general';

type FontSizePreset =
  | 'small'
  | 'text'
  | 'normal'
  | 'caption'
  | 'medium'
  | 'large'
  | 'title';

type LineHeightPreset =
  | 'preset-1'
  | 'preset-2'
  | 'preset-3'
  | 'preset-4'
  | 'preset-5'
  | 'preset-6'
  | 'preset-7'
  | 'preset-8'
  | 'preset-9'
  | 'preset-10'
  | 'preset-11'
  | 'preset-12';

interface ParagraphElement
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>,
    BaseTextProps {}

interface SpanElement
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
    BaseTextProps {}

interface HeadingElement
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>,
    BaseTextProps {}

/**
 * Basic Text Styling Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface BaseTextStylingProps {
  color: LiteralUnion<keyof typeof COLOR_PALLETE, string>;
  fontSize: LiteralUnion<FontSizePreset, number | string>;
  fontWeight: Property.FontWeight;
  lineHeight: LiteralUnion<LineHeightPreset, number | string>;
  textAlign: Property.TextAlign;
}

/**
 * Text Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface BaseTextProps extends Partial<BaseTextStylingProps> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

/**
 * Text Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export type TextProps = ParagraphElement | SpanElement | HeadingElement;
