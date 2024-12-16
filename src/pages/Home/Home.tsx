import { FC, useEffect, useState } from "react";
import FixedWidthWrapper from "../../utils/Fixed-width-wrapper/FixedWidthWrapper";
import PopularFeatures from "./views/PopularFeatures/PopularFeatures";
import BlogAddForm from "./components/blog-add-form/BlogAddForm";
import BlogSearchForm from "./components/blog-search-form/BlogSearchForm";
import Blog from "./views/Blog/Blog";
import qs from "qs";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getBlogsData } from "@/api/add-blog";

export interface Blog {
  title_en: number;
  title_ka: string;
  description_en: string | null;
  description_ka: string | null;
  user_id: string | null;
  image_url: string | null;
  created_at: string;
}

const Home: FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchParams, setSearchParams] = useSearchParams()
  //@ts-ignore
  const {refetch} = useQuery({queryKey: ['getBlogs'], queryFn: getBlogsData})
  const {mutate} = useMutation({mutationKey: ['mutateBlogs'], mutationFn: getBlogsData})


  useEffect(() => {
    const parsedSearchParam = qs.parse(searchParams.toString())
    const searchText = parsedSearchParam?.searchText
    refetch()
    //@ts-ignore
    mutate({searchText, setBlogs})
  }, []);


  return (
    <section className="mt-[30px]">
      <FixedWidthWrapper className="grid grid-cols-[2fr_1fr] gap-[30px]">
        <div className="*:mb-[30px] *:rounded-xl *:border-[1px] *:border-[#b4a9a952] *:shadow-md">
          <BlogAddForm />
          <BlogSearchForm refetchBlogs={refetch} setBlogs={setBlogs} searchParams={searchParams} setSearchParams={setSearchParams}/>
          {[...blogs]?.reverse().map((data, index) => {
            return (
              //@ts-ignore
              <Blog key={index} data={data} />
            );
          })}
        </div>
        <PopularFeatures />
      </FixedWidthWrapper>
    </section>
  );
};

export default Home;
