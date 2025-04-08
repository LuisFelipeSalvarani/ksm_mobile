import dayjs from 'dayjs'

export function getDate(value?: string, template?: string) {
  return dayjs(value).format(template ? template : 'DD/MM/YYYY')
}
