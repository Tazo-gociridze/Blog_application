import { FC } from "react";

//@ts-ignore
const BlogText: FC = ({data}) => {

  return (
    <div className="mt-[20px]">
      <h2 className="text-[25px] font-[700]">{data.title_en}</h2>
      <div className="flex gap-[20px] text-[14px] font-[300]">
        <span>{data.blogCreator} /</span>
        <span>{data.createDate} /</span>
        <span>{data.readTime} /</span>
      </div>
      <p className="mt-[20px] text-[15px]">{data.description_en}</p>
    </div>
  );
};

export default BlogText;
