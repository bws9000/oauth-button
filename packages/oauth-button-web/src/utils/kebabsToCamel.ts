export function kebabsToCamel<T extends string>(kebab: T): string {
  return kebab.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}