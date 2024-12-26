import { useAuthContext } from '@/contextApi/auth/hook/useAuthContext'
import { useForm } from 'react-hook-form'
import { BlogAddFormData, blogListDefaultValues } from '../BlogAddForm.data.types'
import qs from 'qs'
import { useSearchParams } from 'react-router-dom'
import { useAddBlogMutation } from '@/react-query/mutations/blogs'
import { useGetBlogsListQuery } from '@/react-query/queries/blogs'

const useBlogAddFormLogic = () => {
  const { user } = useAuthContext()
  const [searchParams] = useSearchParams()
  const parsedQueryParams = qs.parse(searchParams.toString())
  const searchText = parsedQueryParams.searchText
  const { handleSubmit, control } = useForm({
    defaultValues: blogListDefaultValues,
  })
  const { refetch } = useGetBlogsListQuery({ searchText })
  const { mutate } = useAddBlogMutation({
    mutationOptions: {
      onSuccess: () => {
        refetch()
      },
    },
  })

  const onSubmit = async (formValues: BlogAddFormData) => {
    mutate({ formValues, user })
  }

  return {
    handleSubmit,
    control,
    onSubmit,
  }
}

export default useBlogAddFormLogic
