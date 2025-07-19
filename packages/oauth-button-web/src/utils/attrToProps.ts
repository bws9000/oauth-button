import { kebabsToCamel } from "./kebabsToCamel";

export function extractPropsFromAttributes<T extends string>(
    el: HTMLElement,
    keys: T[]
): Record<T, string> {
    const result = {} as Record<T, string>;
    keys.forEach((key) => {
        const camelKey = kebabsToCamel(key) as T;
        const value = el.getAttribute(key) || '';
        result[camelKey] = value;
    });
    return result;
}