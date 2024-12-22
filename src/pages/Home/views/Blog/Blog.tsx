import { FC } from "react";
import BlogImage from "../../components/Blog/BlogImage/BlogImage";
import BlogText from "../../components/Blog/BlogText/BlogText";
import BlogTags from "../../components/Blog/BlogTags/BlogTags";
import { BlogDataTypes } from "../../Home.data.types";


const Blog: FC<{data: BlogDataTypes}> = ({data}) => {
  return (
      <div className="h-500px p-[25px] cursor-pointer">
        <BlogImage data={data}/>
        <BlogText data={data}/>
        <BlogTags/>
      </div>
  );
};

export default Blog;
