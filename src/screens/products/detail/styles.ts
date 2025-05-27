import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '@/constants/theme'

const { width } = Dimensions.get('window')

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: colors.zinc[500],
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    boxShadow: [
      {
        color: colors.zinc[300],
        offsetX: 0,
        offsetY: 6,
        spreadDistance: 1,
        blurRadius: 10,
      },
    ],
  },
  chart: {
    width: width * 0.8,
    height: 220,
  },
  buyerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.zinc[200],
  },
  buyerText: {
    fontSize: 14,
  },
})
