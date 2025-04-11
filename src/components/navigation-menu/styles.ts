import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    padding: 16,
    gap: 4,
  },
  list: {
    height: 76,
    gap: 16,
  },
  title: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
  },
  buttonWrapper: {
    width: 76,
    height: 76,
    alignItems: 'center',
    gap: 4,
  },
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: colors.blue[600],
    boxShadow: [
      {
        color: colors.zinc[400],
        offsetX: 0,
        offsetY: 2,
        spreadDistance: 0,
        blurRadius: 5,
      },
    ],
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    lineHeight: 16,
    color: colors.zinc[800],
  },
})
