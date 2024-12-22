import { useAuthContext } from "@/contextApi/auth/hook/useAuthContext";
import { useForm } from "react-hook-form";
import {
  BlogAddFormData,
  blogListDefaultValues,
} from "../BlogAddForm.data.types";
import { addBlogRequest } from "@/api/add-blog";
import { useMutation, useQuery } from "@tanstack/react-query";
import qs from "qs";
import { useSearchParams } from "react-router-dom";

const useBlogAddFormLogic = () => {
  const { user } = useAuthContext();
  const [searchParams] = useSearchParams();
  const parsedQueryParams = qs.parse(searchParams.toString());
  const { handleSubmit, control } = useForm({
    defaultValues: blogListDefaultValues,
  });
  const { refetch } = useQuery({
    queryKey: ["getBlogs", parsedQueryParams.searchText],
  });

  const mutate = useMutation({
    mutationKey: ["addBlog"],
    mutationFn: addBlogRequest,
    onSuccess: () => {
      refetch()
    }
  });

  const onSubmit = async (formValues: BlogAddFormData) => { 
    mutate.mutate({ formValues, user });
  };

  return {
    handleSubmit,
    control,
    onSubmit,
  };
};

export default useBlogAddFormLogic;
