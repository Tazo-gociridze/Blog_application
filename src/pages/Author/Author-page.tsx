import { FC } from 'react'
import useBlogData from '../../customHooks/blog-data/useBlogData'
import AvatarDescription from './views/avatar-description/AvatarDescription'
import AvatarNav from './views/avatar-nav/AvatarNav'
import AvatarBlogs from './views/avatar-blogs/AvatarBlogs'

const AuthorPage: FC = () => {
  const { articles, setIsArticles, BlogData } = useBlogData()

  return (
    <section className='m-auto mt-[40px] w-[900px]'>
      <AvatarDescription />
      <AvatarNav setIsArticles={setIsArticles} articles={articles} />
      <AvatarBlogs BlogData={BlogData} articles={articles} />
    </section>
  )
}

export default AuthorPage
