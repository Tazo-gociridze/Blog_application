import { Input } from "@/components/ui/input";
import { supabase } from "@/supabase";
import qs from "qs";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Blog } from "../../Home";
import { NavigateOptions, URLSearchParamsInit } from "react-router-dom";
import underscore from "underscore"

type URLSearchParamsType = URLSearchParams;
type SetURLSearchParamsType = (
  nextInit: URLSearchParamsInit,
  navigateOptions?: NavigateOptions | undefined,
) => void;

interface BlogSearchFormProps {
  setBlogs: (blogs: Blog[]) => void;
  searchParams: URLSearchParamsType;
  setSearchParams: SetURLSearchParamsType;
}

const BlogSearchForm: FC<BlogSearchFormProps> = ({
  setBlogs,
  searchParams,
  setSearchParams,
}) => {
  const parsedQueryParams = qs.parse(searchParams.toString());
  const { control, watch } = useForm({
    defaultValues: parsedQueryParams,
  });

  const watchedSearchField = watch("searchText");

  useEffect(() => {
    const fetchFilteredBlogs = underscore.debounce( () => {
      return supabase
        .from("blog-data")
        .select("*")
        .ilike("title_en", `%${watchedSearchField}%`)
        .throwOnError()
        .then((res) => {
          //@ts-ignore
          setBlogs(res.data);
        });
    }, 1000)

    const fetchAllBlogs = underscore.debounce(() => {
      return supabase
      .from("blog-data")
      .select("*")
      .ilike("title_en", `%%`)
      .throwOnError()
      .then((res) => {
        //@ts-ignore
        setBlogs(res.data);
      });
    }, 1000)

    if (typeof watchedSearchField === 'string' && watchedSearchField.length > 2) {
      setSearchParams(
        qs.stringify(
          { searchText: watchedSearchField },
          {
            skipNulls: true,
            filter: (_, value) => {
              return value || undefined;
            },
          },
        ),
      );
    
      fetchFilteredBlogs()
    } else {
      fetchAllBlogs()
    }
  }, [watchedSearchField]);

  // const onSubmit = (searchFormValue: any) => {
  //   setSearchParams(
  //      qs.stringify(searchFormValue, {
  //       skipNulls: true,
  //       filter: (_, value) => {
  //           return value || undefined
  //       }
  //      })
  //   )
  //       supabase
  //         .from("blog-data")
  //         .select("*")
  //         .ilike("title_en", `%${searchFormValue?.searchText}%`)
  //         .throwOnError()
  //         .then((res) => {
  //           //@ts-ignore
  //           setBlogs(res.data);
  //         });
  // }

  return (
    <div className="mt-20 flex gap-x-4 !border-none !shadow-none">
      <Controller
        name={"searchText"}
        control={control}
        render={({ field }) => {
          //@ts-ignore
          return <Input type="text" placeholder="Search" {...field} />;
        }}
      />
      {/* <Button variant={"secondary"} onClick={handleSubmit(onSubmit)}>
        Search
      </Button> */}
    </div>
  );
};

export default BlogSearchForm;
