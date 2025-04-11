import { StyleSheet } from 'react-native'
import { fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    paddingLeft: 16,
  },
  chartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  caption: {
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
    paddingRight: 16,
    position: 'absolute',
  },
})
