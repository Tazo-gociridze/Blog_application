import { useAuthContext } from "@/contextApi/auth/hook/useAuthContext";
import { useForm } from "react-hook-form";
import { BlogAddFormData, blogListDefaultValues } from "../BlogAddForm.data.types";
import { addBlogRequest } from "@/api/add-blog";
import { useMutation } from "@tanstack/react-query";


const useBlogAddFormLogic = () => {
  const { user } = useAuthContext();
  const { handleSubmit, control } = useForm({
    defaultValues: blogListDefaultValues,
  });

  const mutate = useMutation({
    mutationKey: ["addBlog"],
    mutationFn: addBlogRequest,
  });

  const onSubmit = async (formValues: BlogAddFormData) => {
    mutate.mutate({ formValues, user });
  };

  return{
    handleSubmit,
    control,
    onSubmit
  }
};

export default useBlogAddFormLogic;
