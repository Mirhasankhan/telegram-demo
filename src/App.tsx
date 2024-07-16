import { useContext, useState } from "react";
import Chats from "./components/Chats";
import Messages from "./components/Messages";
import { ThemeContext } from "./components/ThemeProvider";

const App = () => {
  const [message, setMessage] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <div className="md:hidden">
        <Chats
          setMessage={setMessage}
          setCurrentMessage={setCurrentMessage}
        ></Chats>

        {/* <Messages message={message} currentMessage={currentMessage}></Messages> */}
      </div>
      <div className="hidden md:grid grid-cols-6">
        <div className="col-span-2 h-screen overflow-y-auto overflow-x-hidden">
          <Chats
            setMessage={setMessage}
            setCurrentMessage={setCurrentMessage}
          ></Chats>
        </div>
        <div className="col-span-4">
          <Messages
            message={message}
            currentMessage={currentMessage}
          ></Messages>
        </div>
      </div>
    </div>
  );
};

export default App;
