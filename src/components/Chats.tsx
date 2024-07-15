import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdArchive } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import moment from "moment";
import Manage from "./Manage";
import { TChat } from "../types/chat.type";

const Chats = ({
  setMessage,
  setCurrentMessage,
}: {
  setMessage: Function;
  setCurrentMessage: Function;
}) => {
  const [chats, setChats] = useState<TChat[]>([]);
  const [id, setId] = useState("");
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const colors = [
    "bg-green-400",
    "bg-red-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-purple-400",
  ];

  useEffect(() => {
    axios
      .get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`)
      .then((res) => {
        setMessage(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("https://devapi.beyondchats.com/api/get_all_chats")
      .then((res) => {
        setChats(res.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div className="flex gap-3 items-center py-2 bg-blue-500 px-2">
        <Manage></Manage>
        <div className="md:hidden text-white font-medium flex w-full justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="w-6 h-6 border-2 border-green-500 p-0.5 rounded-full"
              src="/gram.jfif"
              alt=""
            />
            <h1>1 Story</h1>
          </div>
          <IoIosSearch className="text-xl text-white"></IoIosSearch>
        </div>
        <input
          type="text"
          placeholder="search"
          className="hidden md:block w-full border rounded-full px-3 py-1 bg-[#F1F1F1] border-[#F1F1F1] focus:outline-none focus:bg-white focus:border-gray-200"
        />
      </div>
      <div className="flex items-center gap-2 py-3 px-2 ">
        <div className="bg-gray-400 p-2 rounded-full w-12 h-12 flex items-center justify-center">
          <IoMdArchive className="text-white text-2xl"></IoMdArchive>
        </div>
        <div>
          <h1 className="font-medium">Archived chats</h1>
          <p className="text-sm text-gray-400">Apurbo</p>
        </div>
      </div>
      {chats?.map((chat: TChat, index: number) => (
        <div
          key={chat.id}
          onClick={() => {
            setId(chat.id);
            setSelectedChatId(chat.id);
            setCurrentMessage(chat.creator.name);
          }}
        >
          <div
            className={`flex items-center hover:bg-gray-200 justify-between  hover:cursor-pointer ${
              selectedChatId === chat.id ? "bg-blue-500 text-white" : ""
            }`}
          >
            <div
              className={`flex items-center gap-2 py-3 px-2   ${
                selectedChatId === chat.id ? "text-white" : ""
              }`}
            >
              <div
                className={`p-2 rounded-full w-12 h-12 flex items-center justify-center ${
                  colors[index % colors.length]
                }`}
              >
                <h1 className="text-white text-xl font-medium">
                  {chat.creator.name ? chat.creator.name.charAt(0) : "U"}
                </h1>
              </div>
              <div>
                <h1 className="font-medium">
                  {chat.creator.name || "Unknown"}{" "}
                </h1>
                <p
                  className={`text-blue-400 text-sm ${
                    selectedChatId === chat.id ? "text-white" : ""
                  }`}
                >
                  {chat.creator.name} joined telegram
                </p>
              </div>
            </div>
            <div className="pr-2">
              <h1
                className={`text-sm text-gray-400 ${
                  selectedChatId === chat.id ? " text-white" : ""
                }`}
              >
                {moment(chat.created_at).format("DD-MM-YYYY")}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
