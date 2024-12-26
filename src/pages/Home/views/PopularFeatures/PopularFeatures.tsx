import { FC } from 'react'
import PopularTags from '../../components/PopularFeatures/PopularTags/PopurarTags'
import Author from '../../components/PopularFeatures/Author/Author'
import { useTranslation } from 'react-i18next'

const PopularFeatures: FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className=''>
        <div className='rounded-xl border-[1px] border-[#b4a9a952] p-[20px] shadow-md'>
          <h3 className='font-semibold'>{t('title-popular-tags')}</h3>
          <PopularTags />
        </div>
        <div className='mt-[30px] h-[258px] rounded-xl border-[1px] border-[#b4a9a952] p-[20px] shadow-md'>
          <h3 className='font-semibold'>{t('title-featured-authors')}</h3>
          <div className='mt-6 *:mb-[15px]'>
            <Author />
            <Author />
            <Author />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularFeatures
