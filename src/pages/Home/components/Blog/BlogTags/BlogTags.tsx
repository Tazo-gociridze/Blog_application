import { useTranslation } from 'react-i18next'

const BlogTags = () => {
  const { t } = useTranslation()
  return (
    <div className='mt-[20px] flex gap-[10px] text-[12px] font-[500] text-[#6a4f96] *:rounded-[5px] *:bg-[#E0E2EB] *:px-[10px] *:py-[3px]'>
      <div>{t('tag-blockchain')}</div>
      <div>{t('tag-technology')}</div>
      <div>{t('tag-future')}</div>
    </div>
  )
}

export default BlogTags
