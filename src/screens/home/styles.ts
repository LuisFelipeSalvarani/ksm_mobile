import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
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
