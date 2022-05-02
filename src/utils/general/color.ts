/**
 * Hex To RGBA
 *
 * @param {string} hex - hex color
 * @param {string} alpha - alpha channel
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @example hexToRgba(#fff, 0.5) -> rgba(255,255,255,0.5);
 * @returns {string} rgba color
 */
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  if (hex.includes('#')) {
    let hexCode = hex.replace('#', '');

    if (hexCode.length === 3)
      hexCode = `${hexCode[0]}${hexCode[0]}${hexCode[1]}${hexCode[1]}${hexCode[2]}${hexCode[2]}`;

    const red = parseInt(hexCode.substring(0, 2), 16);
    const green = parseInt(hexCode.substring(2, 4), 16);
    const blue = parseInt(hexCode.substring(4, 6), 16);

    return `rgba(${red},${green},${blue},${alpha})`;
  }

  throw new Error('HEX format not valid');
};
