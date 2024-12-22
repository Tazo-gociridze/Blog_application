import { FC } from "react";
import FixedWidthWrapper from "../../utils/Fixed-width-wrapper/FixedWidthWrapper";
import PopularFeatures from "./views/PopularFeatures/PopularFeatures";
import BlogAddForm from "./components/blog-add-form/BlogAddForm";
import BlogSearchForm from "./components/blog-search-form/BlogSearchForm";
import Blog from "./views/Blog/Blog";
import { BlogDataTypes } from "./Home.data.types";
import useHomeLogic from "./hook/useHomeLogic";

const Home: FC = () => {
  const {
    setSearchParams,
    data,
    searchParams
  } = useHomeLogic()

  return (
    <section className="mt-[30px]">
      <FixedWidthWrapper className="grid grid-cols-[2fr_1fr] gap-[30px]">
        <div className="*:mb-[30px] *:rounded-xl *:border-[1px] *:border-[#b4a9a952] *:shadow-md">
          <BlogAddForm />
          <BlogSearchForm
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          {data ? [...data].reverse().map((data, index) => {
            return <Blog key={index} data={data as BlogDataTypes} />;
          }): null}
        </div>
        <PopularFeatures />
      </FixedWidthWrapper>
    </section>
  );
};

export default Home;
