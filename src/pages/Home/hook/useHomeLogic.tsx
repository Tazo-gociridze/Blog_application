import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useQuery } from "@tanstack/react-query";
import { getBlogsData } from "@/api/add-blog";

const useHomeLogic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedQueryParams = qs.parse(searchParams.toString());

  const { data } = useQuery({
    queryKey: ["getBlogs", parsedQueryParams.searchText],
    queryFn: () =>
      getBlogsData({ watchedSearchField: parsedQueryParams.searchText }),
  });

  return{
    setSearchParams,
    data,
    searchParams,
  }
};

export default useHomeLogic;
