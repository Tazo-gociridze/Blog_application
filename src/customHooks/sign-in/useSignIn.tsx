import { formSchema, onSubmit } from "@/pages/SignIn/data/formSchema";
import { login } from "@/supabase/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
const navigate = useNavigate()
const { t } = useTranslation();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (res) => {
      if(res.error?.code === 'invalid_credentials'){
          navigate('/loginerror')
      } else {
        navigate('/')
      }
    },
  });

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!!loginPayload.email && !!loginPayload.password) {
      mutate(loginPayload);
    }
    form.handleSubmit(onSubmit);
};

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return {
    t,
    loginPayload,
    setLoginPayload,
    mutate,
    handleSubmitLogin,
    form,
  }
};

export default useSignIn;
