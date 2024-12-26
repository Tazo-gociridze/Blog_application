import { addBlogRequest } from '@/api/add-blog'
import { BlogAddFormData } from '@/pages/Home/components/blog-add-form/BlogAddForm.data.types'
import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query'
import { BLOG_MUTATION_KEYS } from '../enum'

interface useAddBlogMutationArgumentsType {
  formValues: BlogAddFormData
  user: any
}

export const useAddBlogMutation = ({
  mutationOptions = {},
}: {
  mutationOptions: Omit<
    UseMutationOptions<void, any, useAddBlogMutationArgumentsType>,
    'mutationKey'
  >
}): UseMutationResult<void, any, useAddBlogMutationArgumentsType> => {
  return useMutation<void, any, useAddBlogMutationArgumentsType>({
    mutationKey: [BLOG_MUTATION_KEYS.ADD_BLOG],
    mutationFn: addBlogRequest,
    ...mutationOptions,
  })
}
