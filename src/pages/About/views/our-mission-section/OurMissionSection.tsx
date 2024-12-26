import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { FC } from 'react'

const OurMissionSection: FC = () => {
  return (
    <div className='mt-[40px] grid grid-cols-[1fr_1fr] gap-[30px]'>
      <div className='place-self-center'>
        <h2 className='text-[32px] font-[500]'>Our Mission</h2>
        <p className='mt-[10px] tracking-[1px]'>
          At bitBlogs, we believe in the power of shared knowledge. Our mission is to create a
          platform where tech enthusiasts, developers, and innovators can come together to share
          ideas, learn from each other, and push the boundaries of what's possible in the world of
          technology.
        </p>
      </div>
      <Avatar className=''>
        <AvatarImage className='' src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default OurMissionSection
