import { ProfileState } from '@/customHooks/profile/useProfileLogic'

const ProfileInfo = ({ data }: { data: ProfileState }) => {
  return (
    <div className='flex gap-x-[30px]'>
      <img
        src={data.avatar_url ? data.avatar_url : 'https://api.dicebear.com/9.x/avataaars/svg'}
        className='h-[100px] w-[100px] rounded-full'
        alt='DiceBear Avatar'
      />
      <ul className='text-[20px]'>
        <li>
          <b className='mr-[13px]'>Name_en: </b>
          {data.full_name_en}
        </li>
        <li>
          <b className='mr-[13px]'>Name_ka: </b>
          {data.full_name_ka}
        </li>
        <li>
          <b className='mr-[13px]'>Phone number: </b>
          {data.phone_number}
        </li>
      </ul>
    </div>
  )
}

export default ProfileInfo
