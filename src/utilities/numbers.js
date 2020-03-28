/**
 * Validate value to be an integer
 *
 * @param value
 */
export const isInteger = (value) => {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
};