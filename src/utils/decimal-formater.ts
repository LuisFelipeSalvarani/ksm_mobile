export function getDecimal(value: string | number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
  }).format(Number(value))
}
