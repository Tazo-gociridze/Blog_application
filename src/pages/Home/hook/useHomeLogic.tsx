import { useSearchParams } from 'react-router-dom'
import qs from 'qs'
import { useGetBlogsListQuery } from '@/react-query/queries/blogs'

const useHomeLogic = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const parsedQueryParams = qs.parse(searchParams.toString())
  const searchText = parsedQueryParams.searchText
  const { data } = useGetBlogsListQuery({ searchText })

  return {
    setSearchParams,
    data,
    searchParams,
  }
}

export default useHomeLogic
