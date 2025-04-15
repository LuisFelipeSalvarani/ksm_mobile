import { Loading } from '@/components/loading'
import { useProductsListContainer } from '@/hooks/use-products-list-container'
import { UseProductsListScreen } from '@/screens/products/list/use-products-list-screen'

export default function ProductsList() {
  const {
    allProducts,
    setPage,
    search,
    setSearch,
    groupId,
    isLoading,
    isFetching,
    filterRequest,
    clearFilterRequest,
    allProductsGroups,
    isLoadingGroups,
    infiniteScroll,
  } = useProductsListContainer()

  if (
    (isLoading && !allProducts?.length) ||
    !allProducts?.length ||
    isLoadingGroups ||
    !allProductsGroups?.length
  )
    return <Loading />

  return (
    <UseProductsListScreen
      products={allProducts}
      setPage={setPage}
      search={search}
      setSearch={setSearch}
      groupId={groupId}
      isFetching={isFetching}
      filterRequest={filterRequest}
      clearFilterRequest={clearFilterRequest}
      groups={allProductsGroups}
      infiniteScroll={infiniteScroll}
    />
  )
}
