import { Input } from '@/components/ui/input'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { BlogSearchFormProps } from './BlogSearchForm.types'
import useBlogSearchFormlLogic from './hook/useBlogSearchFormLogic'

const BlogSearchForm: FC<BlogSearchFormProps> = ({ searchParams, setSearchParams }) => {
  const { control } = useBlogSearchFormlLogic({
    searchParams,
    setSearchParams,
  })

  return (
    <div className='mt-20 flex gap-x-4 !border-none !shadow-none'>
      <Controller
        name={'searchText'}
        control={control}
        render={({ field }) => {
          return <Input type='text' placeholder='Search' {...(field as any)} />
        }}
      />
    </div>
  )
}

export default BlogSearchForm
