import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FC } from "react";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";

const AvatarDescription: FC = () => {
  return (
    <div className="flex gap-x-[20px] rounded-lg border-[1px] border-[#918c8c2f] p-[30px] shadow-lg">
        <Avatar className="w-[100px] h-[100px] rounded-[50%]">
          <AvatarImage className="rounded-[50%]" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-[30px] font-[700]">Jane Doe</h1>
          <p>
            Tech enthusiast, software engineer, and avid blogger. Passionate
            about AI, web development, <br />
            and the future of technology.
          </p>
          <div className="mt-[10px] flex gap-x-[15px] *:cursor-pointer *:rounded-[50%] *:border-[1px] *:p-[10px]">
            <div><CiTwitter /></div>
            <div><SlSocialFacebook /></div>
            <div><LuLinkedin /></div>
            <div><FiGithub /></div>
          </div>
          <div className="mt-[10px] flex gap-x-[20px] text-[14px] *:flex *:items-center *:gap-x-[5px]">
            <span>
              <GoPeople /> 1234 Followers
            </span>
            <span>
              <GoPeople /> 567 Following
            </span>
          </div>
        </div>
      </div>
  )
};

export default AvatarDescription;
