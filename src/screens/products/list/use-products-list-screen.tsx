import { Picker } from '@react-native-picker/picker'
import { IconSearch, IconTrash } from '@tabler/icons-react-native'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Input } from '@/components/input'
import { Loading } from '@/components/loading'
import { colors } from '@/constants/theme'
import type {
  GroupsListData,
  ProductsListData,
} from '@/hooks/use-products-list-container'
import { UseProductsItem } from '../components/products-item/use-products-item'
import { s } from './styles'

type UseProductsListScreenProps = {
  products?: ProductsListData
  groups?: GroupsListData
  setPage: React.Dispatch<React.SetStateAction<number>>
  search: string | undefined
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>
  groupId: number | undefined
  isFetching: boolean
  filterRequest: (value: number) => void
  clearFilterRequest: () => void
  infiniteScroll: () => void
}

const UseProductsListScreen = ({
  products,
  groups,
  setPage,
  search,
  setSearch,
  groupId,
  isFetching,
  filterRequest,
  clearFilterRequest,
  infiniteScroll,
}: UseProductsListScreenProps) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Produtos:</Text>

        <TouchableOpacity style={s.clear} onPress={clearFilterRequest}>
          <Text style={s.clearText}>Limpar</Text>
          <IconTrash size={16} color={colors.zinc[50]} />
        </TouchableOpacity>
      </View>

      <View style={s.filter}>
        <View style={s.select}>
          <Picker
            mode="dialog"
            selectedValue={groupId}
            onValueChange={filterRequest}
            prompt="Grupos de produto"
          >
            <Picker.Item
              value={undefined}
              label="Filtrar por grupo de produtos"
              enabled={false}
            />
            {groups?.map(group => {
              return (
                <Picker.Item
                  key={group.key}
                  label={group.value}
                  value={group.key}
                />
              )
            })}
          </Picker>
        </View>
      </View>

      <View style={s.search}>
        <Input style={s.searchInput}>
          <Input.Icon icon={IconSearch} />
          <Input.Field
            placeholder="Pesquisar"
            value={search}
            onChangeText={setSearch}
          />
        </Input>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        testID="allProductsList"
        contentContainerStyle={s.list}
        onRefresh={() => setPage(1)}
        refreshing={false}
        onEndReached={infiniteScroll}
        renderItem={({ item }) => (
          <UseProductsItem description={item.description} id={item.id} />
        )}
        ListFooterComponent={() =>
          isFetching && (
            <View style={s.loadingContainer}>
              <Loading />
            </View>
          )
        }
        ListEmptyComponent={
          <Text style={s.empty}>Nenhum dado encontrado.</Text>
        }
      />
    </View>
  )
}

export { UseProductsListScreen }
