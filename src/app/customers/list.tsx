import { Loading } from '@/components/loading'
import { useCustomersListContainer } from '@/hooks/use-customers-list-container'
import { UseCustomersListScreen } from '@/screens/customers/list/use-customers-list-screen'

export default function List() {
  const {
    allCustomers,
    setPage,
    search,
    setSearch,
    groupId,
    isLoading,
    isFetching,
    filterRequest,
    clearFilterRequest,
    allCustomersGroups,
    isLoadingGroups,
    infiniteScroll,
  } = useCustomersListContainer()

  if (isLoading && isLoadingGroups) return <Loading />

  return (
    <UseCustomersListScreen
      customers={allCustomers}
      setPage={setPage}
      search={search}
      setSearch={setSearch}
      groupId={groupId}
      isFetching={isFetching}
      filterRequest={filterRequest}
      clearFilterRequest={clearFilterRequest}
      groups={allCustomersGroups}
      infiniteScroll={infiniteScroll}
    />
  )
}
