import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    backgroundColor: colors.zinc[100],
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 4,
  },
  field: {
    flex: 1,
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.blue[800],
    marginTop: 3,
  },
  icon: {
    width: 24,
    height: 24,
  },
})
