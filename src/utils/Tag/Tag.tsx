import { FC, PropsWithChildren } from 'react'

const Tag: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='cursor-pointer rounded-md bg-[#3D61FF] px-[13px] py-[2px] transition-[0.5s] hover:bg-[#3b79ff]'>
      {children}
    </div>
  )
}

export default Tag
