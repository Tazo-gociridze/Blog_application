import { FC, useEffect, useState } from "react";
import FixedWidthWrapper from "../../utils/Fixed-width-wrapper/FixedWidthWrapper";
import Blog from "./views/Blog/Blog";
import PopularFeatures from "./views/PopularFeatures/PopularFeatures";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { supabase } from "@/supabase";

const blogListDefaultValues = {
  title_en: "",
  description_en: "",
  image_url: "",
};

const Home: FC = () => {
  const [blogs, setBlogs] = useState([]);
  const { handleSubmit, control } = useForm({
    defaultValues: blogListDefaultValues,
  });
  const fileInputStyles = `rounded-md border p-2 text-gray-900 file:mr-4 file:rounded-md
   file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold 
   file:text-blue-600 hover:file:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`;

  const onSubmit = (formValues: any) => {
    if (formValues?.image_url) {
      supabase.storage
        .from("blog_image-storage")
        .upload(formValues?.image_url?.name, formValues?.image_url)
        .then((res) => {
          const fullPath = res.data?.fullPath;
          if (fullPath) {
            //@ts-ignore
            return supabase.from("blog-data").insert({
              title_ka: "",
              title_en: formValues.title_en,
              description_ka: "",
              description_en: formValues.description_en,
              user_id: Math.random(),
              image_url: res.data?.fullPath,
            });
          }
        })
        .then(() => {
          alert("blog added successfull")
        });
    }
  };

  useEffect(() => {
    supabase
      .from("blog-data")
      .select("*")
      .throwOnError()
      .then((res) => {
        //@ts-ignore
        setBlogs(res.data)
      });
  }, [blogs]);


  return (
    <section className="mt-[30px]">
      <FixedWidthWrapper className="grid grid-cols-[2fr_1fr] gap-[30px]">
        <div className="*:mb-[30px] *:rounded-xl *:border-[1px] *:border-[#b4a9a952] *:shadow-md">
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
          {[...blogs]?.reverse().map((data) => {
            return(
              //@ts-ignore
              <Blog key={data.user_id} data={data}/>
            )
          })}
        </div>
        <PopularFeatures />
      </FixedWidthWrapper>
    </section>
  );
};

export default Home;