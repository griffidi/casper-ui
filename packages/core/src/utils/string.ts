/**
 * Check if value is empty.
 *
 * @param {string | object | Array<unknown> | unknown} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export const isEmpty = (value: string | object | Array<unknown> | unknown) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value!).length === 0;
  }

  if (typeof value === 'string') {
    return value?.trim().length === 0;
  }

  return false;
};

/**
 * Check if value is not empty.
 *
 * @param {string | object | Array<unknown> | unknown} value The value to check.
 * @returns {boolean} True if the value is not empty, false otherwise.
 */
export const isNotEmpty = (
  value: string | object | Array<unknown> | null | undefined,
) => !isEmpty(value);

/**
 * Replace placeholders in a string with the provided arguments.
 *
 * @param {string} template The string template with placeholders.
 * @param {...args: string[]} The values to replace the placeholders with.
 * @returns {string} The formatted string with placeholders replaced by the provided values.
 */
export const format = (template: string, ...args: string[]) => {
  for (let i = 0; i < args.length; i++) {
    template = template.replaceAll(`{${i}}`, args[i]);
  }
  return template;
};
