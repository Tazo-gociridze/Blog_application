import { useState } from "react";
import { useTranslation } from "react-i18next";

export interface BlogDataInterface {
  id: number;
  title: string;
  blogCreator: string;
  createDate: string;
  readTime: string;
  description: string;
}

export const useBlogData = () => {
  const { t } = useTranslation();
  const [articles, setIsArticles] = useState(true);

  const BlogData: BlogDataInterface[] = [
    {
      id: Math.random(),
      title: `${t("blog-title")}`,
      blogCreator: "John Doe",
      createDate: "May 15, 2023",
      readTime: "5",
      description: `${t("blog-description")}`,
    },

    {
      id: Math.random(),
      title: `${t("blog-title")} 2`,
      blogCreator: "John Doe",
      createDate: "May 15, 2023",
      readTime: "5",
      description: `${t("blog-description")}`,
    },

    {
      id: Math.random(),
      title: `${t("blog-title")} 3`,
      blogCreator: "John Doe",
      createDate: "May 15, 2023",
      readTime: "5",
      description: `${t("blog-description")}`,
    },

    {
      id: Math.random(),
      title: `${t("blog-title")} 4`,
      blogCreator: "John Doe",
      createDate: "May 15, 2023",
      readTime: "5",
      description: `${t("blog-description")}`,
    },
  ];
  return {
    articles,
    setIsArticles,
    BlogData,
  };
};

export default useBlogData;
