import { Dimensions, StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

const { width } = Dimensions.get('window')

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 4,
    elevation: 1,
  },
  title: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
  },
  titleChart: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    marginBottom: 4,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    boxShadow: [
      {
        color: colors.zinc[300],
        offsetX: 0,
        offsetY: 6,
        spreadDistance: 1,
        blurRadius: 10,
      },
    ],
  },
  chart: {
    width: width * 0.8,
    height: 220,
  },
  groupButton: {
    marginTop: 16,
  },
})
