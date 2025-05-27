import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  inputContainer: { flexDirection: 'row', marginBottom: 16 },
  input: {
    flex: 1,
    backgroundColor: colors.zinc[100],
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
  },
  addButton: {
    width: 48,
    height: 48,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue[600],
    borderRadius: 8,
  },
  list: { paddingBottom: 16, gap: 16 },
  item: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.zinc[50],
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  itemDone: { backgroundColor: colors.zinc[100] },
  itemText: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.zinc[800],
    lineHeight: 22,
  },
  textDone: { textDecorationLine: 'line-through', color: colors.zinc[400] },
  buttons: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  complete: { marginRight: 12, padding: 4 },
  delete: { padding: 4 },
  date: { marginTop: 4, fontSize: 12, color: colors.zinc[600] },
})
