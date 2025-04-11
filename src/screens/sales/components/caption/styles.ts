import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    paddingLeft: 8,
  },
  separator: {
    flex: 1,
    marginHorizontal: 16,
    height: 2,
    backgroundColor: colors.zinc[100],
  },
})
