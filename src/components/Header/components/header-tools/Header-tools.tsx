import { Button } from "@/components/ui/button";
import { defaultStyles } from "@/data/defaultStyles/DefaultStyles";
import { FC, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ModeToggle } from "./components/ModeToggle/mode-toggle";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useAuthContext } from "@/contextApi/auth/hook/useAuthContext";


const handleChangeLanguageEn = () => {
  i18next.changeLanguage("en");
};

const handleChangeLanguageKa = () => {
  i18next.changeLanguage("ka");
};

const HeaderTools: FC = () => {
  const [langDropdown, setLangDropdown] = useState(false);
  const { user } = useAuthContext();
  const { t } = useTranslation();

  return (
    <div className="header-tools flex items-center gap-[20px] *:cursor-pointer">
      <div className="text-[27px]">
        <CiSearch />
      </div>
      <div>
        {user ? (
          <Link to={"/profile"}>
            <img
              src="https://api.dicebear.com/9.x/avataaars/svg"
              className="h-[30px] w-[30px] rounded-full"
              alt="DiceBear Avatar"
            />
          </Link>
        ) : (
          <Button className={`${defaultStyles.button}`}>
            <Link to={"/signin"}>{t("sign-in-btn")}</Link>
          </Button>
        )}
      </div>
      <div className="relative text-[14px]">
        <GrLanguage onClick={() => setLangDropdown(!langDropdown)} />
        <div
          className={`absolute right-[0px] top-[40px] h-[100px] w-[100px] gap-[30px] rounded-xl border-[1px] border-[#706b6b2a] bg-[#464444] p-[10px] text-[white] shadow-xl ${langDropdown ? "flex-col" : "hidden"}`}
        >
          <div onClick={handleChangeLanguageEn}>English</div>
          <div onClick={handleChangeLanguageKa}>ქართული</div>
        </div>
      </div>
      <ModeToggle />
    </div>
  );
};

export default HeaderTools;
