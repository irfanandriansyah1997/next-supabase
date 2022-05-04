import { hexToRgba } from '@/utils/general/color';

import { COLOR_PALLETE } from './color';

const colorPallete1 = hexToRgba(COLOR_PALLETE.black, 0.01);
const colorPallete2 = hexToRgba(COLOR_PALLETE.black, 0.02);
const colorPallete3 = hexToRgba(COLOR_PALLETE.black, 0.02);

/* Shadow 1dp */
export const BOX_SHADOW_1dp = `0 1px 1px 0 ${colorPallete1}, 0 2px 1px -1px ${colorPallete2}, 0 1px 3px 0 ${colorPallete3}`;

/* Shadow 2dp */
export const BOX_SHADOW_2dp = `0 2px 2px 0 ${colorPallete1}, 0 3px 1px -2px ${colorPallete2}, 0 1px 5px 0 ${colorPallete3}`;

/* Shadow 3dp */
export const BOX_SHADOW_3dp = `0 3px 4px 0 ${colorPallete1}, 0 3px 3px -2px ${colorPallete2}, 0 1px 8px 0 ${colorPallete3}`;

/* Shadow 4dp */
export const BOX_SHADOW_4dp = `0 4px 5px 0 ${colorPallete1}, 0 1px 10px 0 ${colorPallete2}, 0 2px 4px -1px ${colorPallete3}`;

/* Shadow 6dp */
export const BOX_SHADOW_6dp = `0 6px 10px 0 ${colorPallete1}, 0 1px 18px 0 ${colorPallete2}, 0 3px 5px -1px ${colorPallete3}`;

/* Shadow 8dp */
export const BOX_SHADOW_8dp = `0 8px 10px 1px ${colorPallete1}, 0 3px 14px 2px ${colorPallete2}, 0 5px 5px -3px ${colorPallete3}`;

/* Shadow 9dp */
export const BOX_SHADOW_9dp = `0 9px 12px 1px ${colorPallete1}, 0 3px 16px 2px ${colorPallete2}, 0 5px 6px -3px ${colorPallete3}`;

/* Shadow 12dp */
export const BOX_SHADOW_12dp = `0 12px 17px 2px ${colorPallete1}, 0 5px 22px 4px ${colorPallete2}, 0 7px 8px -4px ${colorPallete3}`;

/* Shadow 16dp */
export const BOX_SHADOW_16dp = `0 16px 24px 2px ${colorPallete1}, 0 6px 30px 5px ${colorPallete2}, 0 8px 10px -5px ${colorPallete3}`;

/* Shadow 24dp */
export const BOX_SHADOW_24dp = `0 24px 38px 3px ${colorPallete1}, 0 9px 46px 8px ${colorPallete2}, 0 11px 15px -7px ${colorPallete3}`;
