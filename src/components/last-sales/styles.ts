import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

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
})
