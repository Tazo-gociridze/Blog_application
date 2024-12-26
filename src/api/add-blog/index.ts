import { BlogAddFormData } from '@/pages/Home/components/blog-add-form/BlogAddForm.data.types'
import { supabase } from '@/supabase'
import { v4 as uuidv4 } from 'uuid'

export interface Blog {
  title_en: string | number
  title_ka: string
  description_en: string | null
  description_ka: string | null
  user_id: string | null
  image_url: string | null
  created_at: string
  blog_id: string
}

export const addBlogRequest = async ({
  formValues,
  user,
}: {
  formValues: BlogAddFormData
  user: any
}) => {
  if (formValues.image_url instanceof File) {
    try {
      const { data, error: uploadError } = await supabase.storage
        .from('blog_image-storage')
        .upload(formValues.image_url.name, formValues.image_url)
      if (uploadError) {
        alert(`Image upload failed: ${uploadError.message}`)
        return
      }

      const fullPath = data?.fullPath

      if (!fullPath) {
        alert('Image upload successful, but path is undefined.  Check Supabase setup.')
        return
      }
      //@ts-ignore
      const { error: insertError } = await supabase.from('blog-data').insert([
        {
          title_ka: '',
          title_en: formValues.title_en,
          description_ka: '',
          description_en: formValues.description_en,
          user_id: user.user.id,
          blog_id: uuidv4(),
          image_url: fullPath,
        },
      ])

      if (insertError) {
        alert(`Database insertion failed: ${insertError.message}`)
        return
      }

      alert('Blog added successfully!')
    } catch (error: any) {
      alert(`An error occurred: ${error.message}`)
      console.error('General error:', error)
    }
  }
}

export const getBlogsData = async ({
  watchedSearchField,
}: {
  watchedSearchField: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined
}): Promise<Blog[]> => {
  if (typeof watchedSearchField === 'string' && watchedSearchField.length > 1) {
    const { data, error } = await supabase
      .from('blog-data')
      .select('*')
      .ilike('title_en', `%${watchedSearchField}%`)
      .throwOnError()
    if (error) {
      console.error('Error fetching blogs with search text:', error)
      return []
    }
    return data as Blog[]
  } else {
    const { data, error } = await supabase.from('blog-data').select('*').throwOnError()
    if (error) {
      console.error('Error fetching all blogs:', error)
      return []
    }
    return data as Blog[]
  }
}
