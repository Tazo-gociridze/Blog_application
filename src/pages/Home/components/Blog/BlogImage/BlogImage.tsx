import { BlogDataTypes } from '@/pages/Home/Home.data.types'
import { FC } from 'react'

const BlogImage: FC<{ data: BlogDataTypes }> = ({ data }) => {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_IMAGE_STORAGE_URL}${data.image_url}`}
      className='blog-image h-[500px] w-[100%] rounded-md'
    />
  )
}

export default BlogImage
