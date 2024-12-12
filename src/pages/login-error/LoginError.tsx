import { Link } from "react-router-dom";

const LoginError = () => {
  return (
    <div>
        <h1 className="m-auto text-center text-[red] text-[50px]">
            პაროლი ან ემაილი შეყვანილია არასწორად 
            <Link to={'/signin'} className="text-[blue]"> ხელახლა შეყვანა</Link>
        </h1>
    </div>
  )
};

export default LoginError;
