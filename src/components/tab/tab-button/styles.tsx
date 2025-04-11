import { Dimensions, StyleSheet } from 'react-native'
import { fontFamily } from '@/constants/theme'

const { width } = Dimensions.get('window')

export const s = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: width * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 6,
    gap: 5,
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    lineHeight: 22,
  },
})
