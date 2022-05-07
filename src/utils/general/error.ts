/**
 * Casting Error
 *
 * @param {any} e - unknown error from try catch
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {Error} formatted error
 */
export const castingError = (e: any): Error => {
  if (e instanceof Error) return e;

  if (typeof e === 'string') return new Error(`${e}`);

  return new Error(`Unknown error: ${e}`);
};
