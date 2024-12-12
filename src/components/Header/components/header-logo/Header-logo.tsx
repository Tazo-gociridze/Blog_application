import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderLogo: FC = () => {
  const {t} = useTranslation()

  return (
    <div className="header-logo cursor-pointer">
      <Link to={'/'}>
        <h1 className="text-[23px] font-[700]">{t("header-logo")}</h1>
      </Link>
    </div>
  );
};

export default HeaderLogo;
