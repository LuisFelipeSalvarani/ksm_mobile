import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    paddingLeft: 8,
  },
  list: {
    padding: 8,
    gap: 16,
  },
  errorWrapper: {
    alignItems: 'center',
    gap: 4,
    padding: 16,
  },
  error: {
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
    lineHeight: 28,
    color: colors.zinc[700],
  },
})
