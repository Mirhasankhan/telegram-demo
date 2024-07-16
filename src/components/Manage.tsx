import { Drawer, Switch } from "antd";
import { useContext, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineGroup } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { ThemeContext } from "./ThemeProvider";
import { CiCircleQuestion } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";

const Manage = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IoMenuSharp
        onClick={showDrawer}
        className="text-2xl text-white cursor-pointer"
      ></IoMenuSharp>
      <Drawer
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
        closeIcon={false}
        placement="left"
        width={270}
        onClose={onClose}
        open={open}
      >
        <div className="border-b pb-2">
          <div className="flex items-center justify-between">
            <p className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-400 text-white text-xl">
              M
            </p>
            <div className="md:hidden">
              <Switch onChange={toggleTheme} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-medium pt-3">Mir Hasan</h1>
              <p className="text-blue-400">Set Emoji Status</p>
            </div>
            <IoIosArrowDown className="text-xl text-gray-400"></IoIosArrowDown>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center py-2">
            <MdOutlineGroup className="text-2xl"></MdOutlineGroup>
            <h1 className="font-medium">New Group</h1>
          </div>
          <div className="flex gap-4 items-center py-2">
            <GrAnnounce className="text-2xl"></GrAnnounce>
            <h1 className="font-medium">New Channel</h1>
          </div>
          <div className="flex gap-4 items-center py-2">
            <IoMdContact className="text-2xl"></IoMdContact>
            <h1 className="font-medium">Contacts</h1>
          </div>
          <div className="flex gap-4 items-center py-2">
            <MdOutlineLocalPhone className="text-2xl"></MdOutlineLocalPhone>
            <h1 className="font-medium">Calls</h1>
          </div>
          <div className="flex gap-4 items-center py-2">
            <CiBookmark className="text-2xl"></CiBookmark>
            <h1 className="font-medium">Saved Messages</h1>
          </div>
          <div className="flex gap-4 items-center py-2">
            <IoSettingsOutline className="text-2xl"></IoSettingsOutline>
            <h1 className="font-medium">Settings</h1>
          </div>
          <div className="md:hidden border-t pt-2 flex gap-4 items-center py-2">
            <FaUserPlus className="text-2xl"></FaUserPlus>
            <h1 className="font-medium">Invite Friends</h1>
          </div>
          <div className="md:hidden flex gap-4 items-center py-2">
            <CiCircleQuestion className="text-2xl"></CiCircleQuestion>
            <h1 className="font-medium">Telegram Features</h1>
          </div>
          <div className="hidden md:flex gap-4 items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <FaRegMoon className="text-2xl"></FaRegMoon>
              <h1 className="font-medium">Night Mode</h1>
            </div>
            <Switch onChange={toggleTheme} />
          </div>
          <div className="hidden md:block mt-40 text-gray-400">
            <h1>Telegram Desktop</h1>
            <p>Version 5.2.3 x64 - About</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Manage;
