import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  clear: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: colors.blue[600],
    borderRadius: 6,
  },
  clearText: {
    color: colors.zinc[50],
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    lineHeight: 18,
  },
  title: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
  },
  filter: {
    padding: 16,
    zIndex: 1,
  },
  select: {
    borderRadius: 12,
    backgroundColor: colors.zinc[100],
  },
  search: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    borderRadius: 12,
  },
  list: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 16,
  },
  loadingContainer: {
    height: 40,
  },
})
