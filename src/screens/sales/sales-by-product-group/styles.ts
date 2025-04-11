import { Dimensions, StyleSheet } from 'react-native'
import { fontFamily } from '@/constants/theme'

const { width } = Dimensions.get('window')

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
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
  chart: {
    width: width * 0.9,
    height: 280,
  },
  caption: {
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
    position: 'absolute',
  },
})
