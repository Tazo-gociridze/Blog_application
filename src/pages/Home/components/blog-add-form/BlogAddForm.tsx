import { Button } from '@/components/ui/button'
import { Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { fileInputStyles } from './BlogAddForm.data.types'
import useBlogAddFormLogic from './hook/useBlogAddFormLogic'

const BlogAddForm = () => {
  const { handleSubmit, control, onSubmit } = useBlogAddFormLogic()

  return (
    <div className='flex w-full flex-col gap-y-3 p-6'>
      <h2 className='mb-7 font-semibold'>Add blog</h2>
      <div className='mb-8 flex flex-col gap-y-8 *:h-14 *:border-[1px] *:border-gray-200 *:px-5 *:shadow-sm'>
        <Controller
          name='title_en'
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type='text' placeholder='Title' value={value} onChange={onChange} />
          }}
        />

        <Controller
          name='description_en'
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type='text' placeholder='Description' value={value} onChange={onChange} />
          }}
        />

        <Controller
          name='image_url'
          control={control}
          render={({ field: { onChange } }) => {
            return (
              <Input
                className={fileInputStyles}
                type='file'
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  onChange(file)
                }}
              />
            )
          }}
        />
      </div>
      <div className='flex flex-col'>
        <Button onClick={handleSubmit(onSubmit)} className='h-10' variant={'default'}>
          Create blog
        </Button>
      </div>
    </div>
  )
}

export default BlogAddForm
