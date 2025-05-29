import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  productInfos: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.semiBold,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fontFamily.medium,
    color: colors.zinc[500],
  },
  infosText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.zinc[800],
  },
  errorWrapper: {
    alignItems: 'center',
    gap: 4,
    padding: 16,
  },
  error: {
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
    lineHeight: 28,
    color: colors.zinc[700],
  },
})
