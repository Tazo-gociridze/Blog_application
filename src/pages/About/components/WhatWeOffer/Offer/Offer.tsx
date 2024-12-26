import { FC } from 'react'
import { FaBookOpen } from 'react-icons/fa'

const Offer: FC = () => {
  return (
    <div className='rounded-lg border-[1px] border-[#918c8c88] p-[30px] shadow-lg'>
      <FaBookOpen className='text-[30px] text-[#3D61FF]' />
      <h3 className='mt-[10px] text-[20px] font-[500]'>Rich Content</h3>
      <p className='mt-[10px]'>
        Access a wide range of articles, tutorials, and insights on the latest tech trends and best
        practices.
      </p>
    </div>
  )
}

export default Offer
