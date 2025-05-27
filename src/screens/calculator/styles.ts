import { StyleSheet } from 'react-native'
import { colors } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: colors.black,
  },
  expr: {
    color: colors.white,
    fontSize: 32,
    textAlign: 'right',
  },
  res: {
    color: colors.zinc[700],
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 16,
  },
  btn: {
    flex: 1,
    margin: 4,
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.zinc[700],
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  equals: { backgroundColor: colors.zinc[800] },
  txt: { color: colors.white, fontSize: 18 },
})
