import { FC } from "react";
import BlogImage from "../../components/Blog/BlogImage/BlogImage";
import BlogText from "../../components/Blog/BlogText/BlogText";
import BlogTags from "../../components/Blog/BlogTags/BlogTags";
import { BlogDataInterface } from "../../../../data/Home/BlogData";

const Blog: FC<{data: BlogDataInterface}> = ({data}) => {
  return (
      <div className="h-500px p-[25px] cursor-pointer">
        {/* @ts-ignore */}
        <BlogImage data={data}/>
        {/* @ts-ignore */}
        <BlogText data={data}/>
        <BlogTags/>
      </div>
  );
};

export default Blog;
