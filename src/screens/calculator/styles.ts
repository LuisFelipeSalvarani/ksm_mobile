import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: { padding: 16 },
  selectorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    gap: 8,
  },
  selectorBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.zinc[100],
  },
  selectorActive: { backgroundColor: colors.blue[500] },
  selTxt: {
    color: colors.zinc[600],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    lineHeight: 22,
  },
  selTxtActive: {
    color: colors.zinc[50],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    lineHeight: 22,
  },
  fields: { marginBottom: 24 },
  fieldBox: {
    padding: 12,
    backgroundColor: colors.zinc[100],
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 10,
    marginBottom: 12,
  },
  fieldActive: { borderColor: colors.blue[500] },
  fieldLabel: {
    fontSize: 14,
    color: colors.zinc[600],
    fontFamily: fontFamily.semiBold,
  },
  fieldValue: {
    fontSize: 18,
    fontFamily: fontFamily.medium,
  },
  resultBox: {
    padding: 16,
    backgroundColor: colors.zinc[100],
    borderRadius: 10,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
    color: colors.zinc[800],
  },
  resultTxt: {
    fontSize: 24,
    fontFamily: fontFamily.semiBold,
    color: colors.zinc[700],
  },
  keypad: {
    padding: 8,
    backgroundColor: colors.zinc[800],
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  keyBtn: {
    flex: 1,
    margin: 4,
    padding: 16,
    borderRadius: 6,
    backgroundColor: colors.zinc[600],
    alignItems: 'center',
  },
  keyEquals: { backgroundColor: colors.blue[500] },
  keyTxt: { color: '#fff', fontSize: 18 },
  txtEquals: { fontWeight: '600' },
})
