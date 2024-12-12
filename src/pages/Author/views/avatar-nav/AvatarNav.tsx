import { FC } from "react";

interface AvatarNavPropsTypes {
    setIsArticles: (value: boolean) => void;
    articles: boolean;
  }

const AvatarNav: FC<AvatarNavPropsTypes> = ({setIsArticles, articles}) => {
  return (
    <div className="mt-[40px] grid grid-cols-[1fr_1fr] text-center *:cursor-pointer *:p-[10px]">
      <div
        onClick={() => setIsArticles(true)}
        className={articles ? `border-[2px]` : ``}
      >
        Articles
      </div>
      <div
        onClick={() => setIsArticles(false)}
        className={articles ? `` : `border-[2px]`}
      >
        About
      </div>
    </div>
  );
};

export default AvatarNav;
