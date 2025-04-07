import { StyleSheet } from 'react-native'
import { fontFamily } from '@/styles/font-family'
import { colors } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 16,
  },
  greeting: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    lineHeight: 14,
  },
  action: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.zinc[600],
    borderWidth: 2,
    borderColor: colors.zinc[700],
  },
})
