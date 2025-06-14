import { Picker } from '@react-native-picker/picker'
import { IconSearch, IconTrash } from '@tabler/icons-react-native'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Header } from '@/components/header'
import { Input } from '@/components/input'
import { Loading } from '@/components/loading'
import { colors } from '@/constants/theme'
import type {
  CustomersListData,
  GroupsListData,
} from '@/hooks/use-customers-list-container'
import { UseCustomersItem } from '../components/customers-item/use-customers-item'
import { s } from './styles'

type UseCustomersListScreenProps = {
  customers?: CustomersListData
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

const UseCustomersListScreen = ({
  customers,
  groups,
  setPage,
  search,
  setSearch,
  groupId,
  isFetching,
  filterRequest,
  clearFilterRequest,
  infiniteScroll,
}: UseCustomersListScreenProps) => {
  return (
    <View style={s.container}>
      <Header title="Clientes" />

      <View style={s.header}>
        <Text style={s.title}>Lista de clientes:</Text>

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
            prompt="Grupos de clientes"
            testID="Picker"
          >
            <Picker.Item
              value={undefined}
              label="Filtrar por grupo de clientes"
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
        data={customers}
        keyExtractor={item => item.id.toString()}
        testID="customersList"
        contentContainerStyle={s.list}
        onRefresh={() => setPage(1)}
        refreshing={false}
        onEndReached={infiniteScroll}
        renderItem={({ item }) => (
          <UseCustomersItem description={item.description} id={item.id} />
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

export { UseCustomersListScreen }
