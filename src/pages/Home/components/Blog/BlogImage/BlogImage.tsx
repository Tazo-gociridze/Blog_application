import { BlogDataTypes } from "@/pages/Home/Home.data.types";
import { FC } from "react";

const BlogImage: FC<{data: BlogDataTypes}> = ({ data }) => {
  return (
    <img
      src={`https://kbotxhglayhpdmbmvkjr.supabase.co/storage/v1/object/public/${data.image_url}`}
      className="blog-image h-[200px] w-[100%] rounded-md"
    />
  );
};

export default BlogImage;
