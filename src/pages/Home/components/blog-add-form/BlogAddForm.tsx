import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { AuthContext } from "@/contextApi/auth";
import { addBlogRequest } from "@/api/add-blog";
import { useMutation } from "@tanstack/react-query";

const fileInputStyles = `rounded-md border p-2 text-gray-900 file:mr-4 file:rounded-md
     file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold 
     file:text-blue-600 hover:file:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`;

const blogListDefaultValues = {
  title_en: "",
  description_en: "",
  image_url: "",
};

const BlogAddForm = () => {
  const { user } = useContext(AuthContext);
  const { handleSubmit, control } = useForm({
    defaultValues: blogListDefaultValues,
  });

  const mutate = useMutation({
    mutationKey: ["addBlog"],
    mutationFn: addBlogRequest,
  });

  const onSubmit = async (formValues: FormData) => {
    mutate.mutate({ formValues, user });
  };

  return (
    <div className="flex w-full flex-col gap-y-3 p-6">
      <h2 className="mb-7 font-semibold">Add blog</h2>
      <div className="mb-8 flex flex-col gap-y-8 *:h-14 *:border-[1px] *:border-gray-200 *:px-5 *:shadow-sm">
        <Controller
          name="title_en"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                type="text"
                placeholder="Title"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />

        <Controller
          name="description_en"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                type="text"
                placeholder="Description"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />

        <Controller
          name="image_url"
          control={control}
          render={({ field: { onChange } }) => {
            return (
              <Input
                className={fileInputStyles}
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
              />
            );
          }}
        />
      </div>
      <div className="flex flex-col">
        <Button
          //@ts-ignore
          onClick={handleSubmit(onSubmit)}
          className="h-10"
          variant={"default"}
        >
          Create blog
        </Button>
      </div>
    </div>
  );
};

export default BlogAddForm;
