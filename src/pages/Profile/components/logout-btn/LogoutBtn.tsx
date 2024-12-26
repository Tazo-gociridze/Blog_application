import { btnStyles } from '@/customHooks/profile/useProfileLogic'

const LogoutBtn = ({ handleLogout }: any) => {
  return (
    <button onClick={() => handleLogout()} className={`${btnStyles} bg-red-500 hover:bg-red-700`}>
      Logout
    </button>
  )
}

export default LogoutBtn
