import { useLocalSearchParams, useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'
import { useSuggestionProductsForCustomer } from '@/hooks/use-suggestion-product-for-customer'

export default function Suggestion() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()

  const { data, isLoading } = useSuggestionProductsForCustomer(Number(id))

  return (
    <Pressable style={s.overlay} onPress={() => router.back()}>
      <Pressable style={s.modal} onPress={e => e.stopPropagation()}>
        <Text style={s.title}>Sugestão de produtos para o cliente:</Text>

        <View style={s.suggestionContainer}>
          {data?.sugestoes.map(suggestion => (
            <View key={suggestion.produto_id} style={s.suggestionItem}>
              <Text style={s.suggestionText}>{suggestion.nome}</Text>
            </View>
          ))}
        </View>

        <Pressable style={s.close} onPress={() => router.back()}>
          <Text style={s.closeText}>Fechar</Text>
        </Pressable>
      </Pressable>
    </Pressable>
  )
}

const s = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    minWidth: '80%',
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.bold,
    color: colors.zinc[800],
  },
  suggestionContainer: {
    gap: 8,
  },
  suggestionItem: {
    padding: 8,
    backgroundColor: colors.zinc[100],
    borderWidth: 1,
    borderColor: colors.zinc[200],
    borderRadius: 8,
  },
  suggestionText: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    lineHeight: 22,
    color: colors.zinc[700],
  },
  close: {
    maxWidth: 80,
    backgroundColor: colors.blue[600],
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    lineHeight: 20,
    color: colors.zinc[100],
  },
})
