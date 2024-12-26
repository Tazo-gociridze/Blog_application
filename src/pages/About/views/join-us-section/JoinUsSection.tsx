import { Button } from '@/components/ui/button'
import { defaultStyles } from '@/data/defaultStyles/DefaultStyles'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const JoinUsSection: FC = () => {
  return (
    <div className='mb-[100px] mt-[40px] flex-col text-center'>
      <h2 className='text-[30px] font-[500]'>Join Us on Our Journey</h2>
      <p className='mt-[10px]'>
        Whether you're a seasoned developer, a curious beginner, or somewhere in between, there's a
        place for you at bitBlogs. Let's shape the future of technology together.
      </p>
      <Link to={'/signup'}>
        <Button className={`${defaultStyles.button} mt-[10px]`}>Get Started Today</Button>
      </Link>
    </div>
  )
}

export default JoinUsSection
