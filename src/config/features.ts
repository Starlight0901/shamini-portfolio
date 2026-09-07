/**
 * Site feature flags.
 *
 * Education / teaching / tutoring content stays in the data files.
 * Flip `education` to `true` to show it again — no other code changes required.
 */
export const features = {
  education: false,
}

export function whenEducation<T>(enabled: T, disabled: T): T {
  return features.education ? enabled : disabled
}

export function withoutEducationContent<T extends { educationContent?: boolean }>(
  items: readonly T[],
): T[] {
  if (features.education) return [...items]
  return items.filter((item) => !item.educationContent)
}
