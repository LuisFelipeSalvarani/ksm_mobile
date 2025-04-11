import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 32,
    gap: 32,
  },
  title: {
    fontSize: 28,
    fontFamily: fontFamily.bold,
    color: colors.blue[800],
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.zinc[700],
  },
  inputWrapper: {
    width: '100%',
    gap: 16,
    paddingHorizontal: 4,
  },
})
