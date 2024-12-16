import { Input } from "@/components/ui/input";
import qs from "qs";
import { FC, useCallback, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Blog } from "../../Home";
import { NavigateOptions, URLSearchParamsInit } from "react-router-dom";
import { useMutation} from "@tanstack/react-query";
import { getBlogsData } from "@/api/add-blog";

type URLSearchParamsType = URLSearchParams;
type SetURLSearchParamsType = (
  nextInit: URLSearchParamsInit,
  navigateOptions?: NavigateOptions | undefined,
) => void;

interface BlogSearchFormProps {
  setBlogs: (blogs: Blog[]) => void;
  searchParams: URLSearchParamsType;
  setSearchParams: SetURLSearchParamsType;
  refetchBlogs: () => void;
}

const BlogSearchForm: FC<BlogSearchFormProps> = ({
  setBlogs,
  searchParams,
  setSearchParams,
  refetchBlogs,
}) => {
  const parsedQueryParams = qs.parse(searchParams.toString());
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { mutate } = useMutation({mutationKey: ['mutateBlogs'], mutationFn: getBlogsData})
  const { control, watch } = useForm({
    defaultValues: parsedQueryParams,
  });

  const myDebounce = useCallback((callback: () => void, delay: number) => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback();
        timeoutRef.current = null;
      }, delay);
    };
  }, []);

  const watchedSearchField = watch("searchText");

  useEffect(() => {
    const fetchFilteredBlogs = () => {
      //@ts-ignore
      mutate({ searchText: watchedSearchField, setBlogs });
      refetchBlogs();
    };

    const fetchAllBlogs = () => {
      mutate({ searchText: '', setBlogs });
      refetchBlogs();
    };

    const debouncedFetchFilteredBlogs = myDebounce(fetchFilteredBlogs, 1000);
    const debouncedFetchAllBlogs = myDebounce(fetchAllBlogs, 1000);

    if (typeof watchedSearchField === 'string' && watchedSearchField.length > 1) {
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
    
      debouncedFetchFilteredBlogs()
    } else {
      debouncedFetchAllBlogs()
    }
  }, [watchedSearchField]);


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
    </div>
  );
};

export default BlogSearchForm;
