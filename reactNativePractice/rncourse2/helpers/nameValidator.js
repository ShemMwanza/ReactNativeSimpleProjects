export function nameValidator(name) {
  if (!name) return "Number can't be empty."
  if (name <= 0) return "Number is too small"
  if (name > 99) return "Number is too big"
  return ''
}
