import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 52,
    backgroundColor: colors.blue[800],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 50,
  },
  text: {
    color: colors.zinc[50],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    paddingTop: 2,
  },
  icon: {},
})
