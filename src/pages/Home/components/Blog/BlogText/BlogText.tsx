import { FC } from "react";
import "dayjs/locale/en";
import { BlogDataTypes } from "@/pages/Home/Home.data.types";
import { dayJsConverter } from "@/dayJS/dayJsConverter";


const BlogText: FC<{data: BlogDataTypes}> = ({ data }) => {

  return (
    <div className="mt-[20px]">
      <h2 className="text-[25px] font-[700]">{data.title_en}</h2>
      <div className="flex gap-[20px] text-[14px] font-[300]">
        <span className="flex gap-x-3">
          <span>Created date:</span>
          <span>{dayJsConverter(data).formattedCreateDate}</span>
        </span>
        <span>
          <span className="font-semibold">{dayJsConverter(data).formattedDate}</span>
        </span>
      </div>
      <p className="mt-[20px] text-[15px]">{data.description_en}</p>
    </div>
  );
};

export default BlogText;
