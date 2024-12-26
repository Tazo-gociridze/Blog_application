import { Link } from 'react-router-dom'

const LoginError = () => {
  return (
    <div>
      <h1 className='m-auto text-center text-[50px] text-[red]'>
        პაროლი ან ემაილი შეყვანილია არასწორად
        <Link to={'/auth/signin'} className='text-[blue]'>
          {' '}
          ხელახლა შეყვანა
        </Link>
      </h1>
    </div>
  )
}

export default LoginError
