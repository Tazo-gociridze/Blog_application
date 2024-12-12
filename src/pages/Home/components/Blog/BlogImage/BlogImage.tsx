import { FC } from "react";

//@ts-ignore
const BlogImage: FC = ({ data }) => {
  return (
    <img
      src={`https://kbotxhglayhpdmbmvkjr.supabase.co/storage/v1/object/public/${data.image_url}`}
      className="blog-image h-[200px] w-[100%] rounded-md"
    />
  );
};

export default BlogImage;
