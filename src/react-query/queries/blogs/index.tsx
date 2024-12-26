import { getBlogsData } from '@/api/add-blog'
import { BlogDataTypes } from '@/pages/Home/Home.data.types'
import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query'
import { ParsedQs } from 'qs'
import { BLOG_QUERY_KEYS } from './enum'

export type useGetBlogSeatchTextType = string | ParsedQs | string[] | ParsedQs[] | undefined

interface useGetBlogsListQueryPropsInterface {
  queryOptions?: Omit<UseQueryOptions<BlogDataTypes[], any>, 'queryKey'>
  searchText: useGetBlogSeatchTextType
}

export const useGetBlogsListQuery = ({
  queryOptions = {},
  searchText,
}: useGetBlogsListQueryPropsInterface): UseQueryResult<BlogDataTypes[], any> => {
  return useQuery<BlogDataTypes[], any>({
    queryKey: [BLOG_QUERY_KEYS.GET_BLOGS, searchText],
    queryFn: () => getBlogsData({ watchedSearchField: searchText }),
    ...queryOptions,
  })
}
