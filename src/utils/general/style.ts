/**
 * Transform Pixel To Rem
 *
 * @param {number} fontSize - font size pixel will be rendered on browser
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description transform pixel into rem
 * @since 0.0.0
 * @returns {string} transformed px to rem
 */
export const pxToRem = (fontSize: number): string => `${fontSize / 16}rem`;
