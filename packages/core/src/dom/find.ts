/**
 * Looks at self or finds the closest ancestor element that matches the given selector.
 * If the element itself matches the selector, it will return that element.
 *
 * @param {Element | null} element - The starting element to search from.
 * @param {string} selector - The CSS selector to match against.
 * @returns {Element | null} The closest matching ancestor element or null if none found.
 */
export const closest = <T extends Element>(element: Element | null, selector: string): T | null => {
  if (!element) {
    return null;
  }

  return element.matches(selector)
    ? (element as T)
    : (element.closest(selector) as T | null);
};
