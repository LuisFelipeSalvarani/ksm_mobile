import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

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
    borderRadius: 10,
    backgroundColor: colors.blue[600],
  },
})
