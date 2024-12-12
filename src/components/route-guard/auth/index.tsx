import { useAuthContext } from "@/contextApi/auth/hook/useAuthContext";
import { FC, PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();

  if(user){
      return <Navigate to={"/"}/>
  }

  return children || <Outlet/>;
};

export const AuthGuardWhileSignOut: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();

  if(!user){
      return <Navigate to={"/"}/>
  }

  return children || <Outlet/>;
};

export default AuthGuard;
