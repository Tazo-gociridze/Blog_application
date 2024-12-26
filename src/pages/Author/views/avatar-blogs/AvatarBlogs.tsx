import { BlogDataInterface } from '@/data/Home/BlogData'
import Blog from '@/pages/Home/views/Blog/Blog'
import { FC } from 'react'

interface AvatarBlogsPropsTypes {
  BlogData: BlogDataInterface[]
  articles: boolean
}

const AvatarBlogs: FC<AvatarBlogsPropsTypes> = ({ BlogData, articles }) => {
  return (
    <>
      {articles ? (
        <div className='mt-[40px] *:mb-[30px] *:rounded-xl *:border-[1px] *:border-[#b4a9a952] *:shadow-md'>
          {BlogData.map((data) => (
            <Blog key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <div className='mt-[40px] rounded-xl border-[1px] border-[#86828244] p-[30px] shadow-md'>
          <h2 className='text-[18px] font-[500]'>About Jane Doe</h2>
          <p className='mt-[10px]'>
            Jane Doe is a seasoned software engineer with over a decade of experience in web
            development. She specializes in JavaScript, React, and Node.js, and has a keen interest
            in emerging technologies like AI and blockchain. Jane is a frequent speaker at tech
            conferences and contributes to various open-source projects.
          </p>
        </div>
      )}
    </>
  )
}

export default AvatarBlogs
