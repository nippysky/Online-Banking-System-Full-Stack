import React, { useState } from "react";
import { MdOutlineDashboard, MdSupportAgent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineBank,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineSend,
  AiOutlineLogout,
} from "react-icons/ai";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const menuItems: { id: number; label: string; icon: any; link: string }[] = [
  {
    id: 1,
    label: "Dashboard",
    icon: <MdOutlineDashboard color="white" size={20} />,
    link: `/bank/accountnumber`,
  },
  {
    id: 2,
    label: "Send Money",
    icon: <AiOutlineSend color="white" size={20} />,
    link: `/bank/accountnumber/send`,
  },
  {
    id: 3,
    label: "Deposit Money",
    icon: <AiOutlinePlusCircle color="white" size={20} />,
    link: `/bank/accountnumber/deposit`,
  },

  {
    id: 4,
    label: "Support",
    icon: <MdSupportAgent color="white" size={20} />,
    link: `/bank/accountnumber/support`,
  },
];

const profLog: { id: number; label: string; icon: any; link: string }[] = [
  {
    id: 1,
    label: "Profile",
    icon: <CgProfile color="white" size={20} />,
    link: `/bank/accountnumber/profile`,
  },
  {
    id: 2,
    label: "Logout",
    icon: <AiOutlineLogout color="white" size={20} />,
    link: `/bank/accountnumber/logout`,
  },
];

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`h-screen ${
        toggle ? "w-60" : "w-10"
      } lg:w-60 bg-black pt-3 lg:pt-8 pb-4 text-white flex flex-col justify-between overflow-hidden`}
    >
      {/* Main Menu */}
      <div className="flex flex-col gap-5 items-start">
        {/* toggle button */}
        <div className="w-full px-1 flex justify-end lg:hidden">
          {toggle ? (
            <div className="cursor-pointer" onClick={() => setToggle(false)}>
              <IoClose color="white" size={30} />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => setToggle(true)}>
              <HiMenu color="white" size={30} />
            </div>
          )}
        </div>

        {menuItems.map((menu) => (
          <Link key={menu.id} href={menu.link}>
            <div
              className={`flex gap-5 justify-between w-full ${
                toggle ? "px-5" : "px-3"
              }`}
            >
              <div>{menu.icon}</div>

              <div className="relative bottom-[2px]">{menu.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Profile & Logout */}
      <div className="flex flex-col gap-5 items-start">
        {profLog.map((menu) => (
          <Link key={menu.id} href={menu.link}>
            <div
              className={`flex gap-5 justify-between w-full ${
                toggle ? "px-5" : "px-3"
              }`}
            >
              <div>{menu.icon}</div>

              <div className="relative bottom-[2px]">{menu.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
