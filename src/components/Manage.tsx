import { Drawer, Switch } from "antd";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineGroup } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";


const Manage = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <IoMenuSharp onClick={showDrawer} className='text-2xl text-gray-400 cursor-pointer'></IoMenuSharp>
            <Drawer closeIcon={false} placement="left" width={270} onClose={onClose} open={open}>
                <div className="border-b pb-2">
                    <p className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-400 text-white text-xl">M</p>
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
                    <div className="flex gap-4 items-center justify-between py-2">
                        <div className="flex items-center gap-4">
                            <FaRegMoon className="text-2xl"></FaRegMoon>
                            <h1 className="font-medium">Night Mode</h1>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Manage;