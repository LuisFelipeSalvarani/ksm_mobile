import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blue[600],
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    borderLeftWidth: 0.25,
    borderRightWidth: 0.25,
    borderColor: colors.blue[600],
  },
  text: {
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    lineHeight: 20,
    color: colors.zinc[800],
  },
})
