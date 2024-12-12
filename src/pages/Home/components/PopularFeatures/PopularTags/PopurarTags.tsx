import { FC } from "react";
import Tag from "../../../../../utils/Tag/Tag";
import { useTranslation } from "react-i18next";

const PopularTags: FC = () => {
  const {t} = useTranslation()
  const PopularTagsData = [
    {name: t("tag-blockchain")},
    {name: t("tag-cryptocurrency")},
    {name: t("tag-technology")},
    {name: t("tag-programming")},
    {name: t("tag-ai")},
    {name: t("tag-machine-learning")},
    {name: t("tag-blockchain")},
]
  return (
    <div className="mt-[20px] flex flex-wrap gap-x-[13px] gap-y-[10px] text-[13px] text-[white]">   
      {PopularTagsData.map((data, i) => <Tag key={i}>{data.name}</Tag>)}
    </div>
  );
};

export default PopularTags;
