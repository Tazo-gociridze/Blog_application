import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import qs from 'qs'
import { BlogSearchFormProps } from '../BlogSearchForm.types'
import useMyDebounce from '@/customHooks/myDebaunce/useMyDebaunce'

const useBlogSearchFormlLogic = ({ searchParams, setSearchParams }: BlogSearchFormProps) => {
  const parsedQueryParams = qs.parse(searchParams.toString())
  const { control, watch } = useForm({
    defaultValues: parsedQueryParams,
  })
  const watchedSearchField = watch('searchText')
  const debouncedSearchText = useMyDebounce(watchedSearchField, 1000)

  useEffect(() => {
    setSearchParams(
      qs.stringify(
        { searchText: debouncedSearchText },
        {
          skipNulls: true,
          filter: (_, value) => {
            return value || undefined
          },
        },
      ),
    )
  }, [debouncedSearchText])

  return {
    control,
    watchedSearchField,
  }
}

export default useBlogSearchFormlLogic
