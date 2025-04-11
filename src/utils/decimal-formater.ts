export function getDecimal(value: string | number | undefined) {
  if (!value) return

  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
  }).format(Number(value))
}
