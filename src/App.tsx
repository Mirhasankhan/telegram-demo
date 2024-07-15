
import { useState } from "react";
import Chats from "./components/Chats";
import Messages from "./components/Messages";


const App = () => {
  const [message, setMessage] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("")

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 h-screen overflow-y-auto overflow-x-hidden">
        <Chats setMessage={setMessage} setCurrentMessage={setCurrentMessage} ></Chats>
      </div>
      <div className="col-span-4">
        <Messages message={message} currentMessage={currentMessage}></Messages>
      </div>
    </div>
  );
};

export default App;
