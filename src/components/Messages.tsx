import bg from '../assets/bg.jfif';
import moment from 'moment';
import { ImAttachment } from "react-icons/im";
import { MdOutlineAddReaction } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { LuPanelRight } from "react-icons/lu";
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import { TMessage } from '../types/chat.type';

const Messages = ({ message, currentMessage }: { message: TMessage[]; currentMessage: string }) => {

    return (
        <div className="h-screen overflow-y-auto"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            {message?.length > 0 && <div className='fixed top-0 right-0 left-[453px] flex bg-white px-3 py-1 gap-2 justify-between items-center'>
                <div>
                    <h1 className='font-medium'>{currentMessage}</h1>
                    <p className='text-sm text-gray-400'>Last Seen 1 hour ago</p>
                </div>
                <div className='flex gap-4 text-gray-400 items-center'>
                    <IoIosSearch className='text-xl'></IoIosSearch>
                    <FaPhone></FaPhone>
                    <LuPanelRight></LuPanelRight>
                    <SlOptionsVertical></SlOptionsVertical>
                </div>
            </div>}
            <div>
                {message?.map((mess: TMessage, index: number) => <div key={index}>
                    {index % 2 === 0 ? (
                        <div>
                            <p className='ml-3 p-2 rounded-md w-2/5 my-2 bg-white'>{mess.message} <span className='text-gray-400 pl-2'>{moment(mess.sender.updated_at).format("h:mm a")}</span></p>

                        </div>
                    ) : (
                        <div>
                            <p className='ml-auto p-2 mr-3 rounded-md w-2/5 my-2 bg-white bg-green-100'>{mess.message}   <span className='text-green-400 pl-2'>{moment(mess.sender.updated_at).format("h:mm a")}</span> <IoCheckmarkDoneOutline className='inline text-xl text-green-400'></IoCheckmarkDoneOutline></p>

                        </div>
                    )}
                </div>)}
                {!message && <div className='h-screen flex flex-grow justify-center items-center'>
                    <p className='bg-black px-2 py-1 text-sm bg-opacity-30 rounded-lg text-white'>select a chat to start messaging</p>
                </div>}
            </div>
            {message?.length > 0 && <div className='fixed bottom-0 right-0 left-[453px] flex bg-white p-3 gap-2 justify-between'>
                <div className='flex gap-2 items-center'>
                    <ImAttachment className='text-2xl text-gray-400 cursor-pointer'></ImAttachment>
                    <input type="text" className='w-full focus:outline-none' placeholder='Write a message' id="" />
                </div>
                <div className='flex gap-4'>
                    <MdOutlineAddReaction className='text-2xl text-gray-400 cursor-pointer'></MdOutlineAddReaction>
                    <RiSendPlane2Fill className='text-2xl text-blue-400 cursor-pointer'></RiSendPlane2Fill>
                </div>
            </div>}
        </div>
    );
};

export default Messages;
