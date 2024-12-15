import { FC } from "react";
import { format, parseISO } from "date-fns";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";
dayjs.extend(relativeTime);

//@ts-ignore
const BlogText: FC = ({ data }) => {
  dayjs.locale("en");
  const createdAt = dayjs(data.created_at);
  const now = dayjs();
  const diffInDays = now.diff(createdAt, "day");

  let formattedDate: string;
  if (diffInDays < 1) {
    formattedDate = createdAt.fromNow();
  } else {
    formattedDate = createdAt.format("YYYY/MM/DD - HH:mm");
  }

  const formattedCreateDate = data.created_at
    ? format(parseISO(data.created_at), "yyyy/MM/dd - HH:mm")
    : "Дата не установлена";

  return (
    <div className="mt-[20px]">
      <h2 className="text-[25px] font-[700]">{data.title_en}</h2>
      <div className="flex gap-[20px] text-[14px] font-[300]">
        <span className="flex gap-x-3">
          <span>Created date:</span>
          <span>{formattedCreateDate}</span>
        </span>
        <span>
          <span className="font-semibold">{formattedDate}</span>
        </span>
      </div>
      <p className="mt-[20px] text-[15px]">{data.description_en}</p>
    </div>
  );
};

export default BlogText;
