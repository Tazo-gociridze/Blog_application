import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Author: FC = () => {
  const { t } = useTranslation()
  return (
    <Link to={'/author'}>
      <div className='mt-[15px] flex cursor-pointer items-center gap-[15px]'>
        <div className='h-[40px] w-[40px] rounded-[50%] bg-[#b4a9a952]'></div>
        <div className='flex flex-col'>
          <span className='text-[15px] font-[500] hover:underline'>{t('feature-author')}</span>
          <span className='text-[14px] text-[#5e5757]'>{t('author-description')}</span>
        </div>
      </div>
    </Link>
  )
}

export default Author
