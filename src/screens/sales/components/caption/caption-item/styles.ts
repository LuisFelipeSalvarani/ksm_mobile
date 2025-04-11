import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
  },
  percentageWrapper: {
    width: 72,
    height: 72,
    position: 'relative',
  },
  percentage: {
    fontSize: 12,
    fontFamily: fontFamily.bold,
    color: colors.zinc[50],
    lineHeight: 16,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      {
        translateX: '-50%',
      },
      {
        translateY: '-50%',
      },
    ],
  },
  infos: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.zinc[800],
  },
  caption: {
    fontSize: 10,
    fontFamily: fontFamily.semiBold,
    color: colors.zinc[800],
  },
  number: {
    fontSize: 12,
  },
})
