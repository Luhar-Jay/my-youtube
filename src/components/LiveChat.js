import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMesaage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMesaage(30) + " 🚀",
        })
      );
    }, 1500);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="ml-2 p-2 bg-slate-100 w-full h-[600px] border border-black overflow-y-auto rounded-lg flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full border border-black p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Jay Luhar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="border border-black w-[600px] p-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 border border-black bg-blue-400">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
