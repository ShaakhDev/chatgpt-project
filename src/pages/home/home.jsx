import { cn } from "@/lib/utils";
import { Forward } from "lucide-react";

const messages = [
  { id: "1", sender: "user", message: "Hello" },
  { id: "2", sender: "bot", message: "Hi! How can I help you?" },
  { id: "3", sender: "user", message: "What is the weather today?" },
  { id: "4", sender: "bot", message: "The weather is sunny today!" },
  { id: "5", sender: "user", message: "Thank you!" },
  { id: "6", sender: "bot", message: "You're welcome!" },
  { id: "7", sender: "user", message: "Hello lorem" },
  { id: "8", sender: "bot", message: "Hi! How can I help you?" },
];

export const HomePage = () => {
  return (
    <div className="container flex-col h-full w-full justify-between pb-5">
      <MessageContainer />
      <div className="flex-col  w-full text-center h-1/5">
        {messages.length === 0 && <h1 className={cn}>What can I help with?</h1>}
        <div className="mx-auto mt-4 pr-5 bg-black rounded-lg flex text-white min-w-3xl max-w-4xl justify-between items-center">
          <input
            type="text"
            placeholder="Ask from ChatGPT"
            className="p-5bg-black rounded-lg flex-1 outline-none"
          />
          <Forward className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const MessageContainer = () => {
  return (
    <div className="flex-col w-full h-full mt-20 max-w-4xl px-4 overflow-y-auto">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";
  return (
    <div>
      <div
        className={cn(
          "mb-12 rounded-lg max-w-[70%] w-max min-w-auto",
          isBot ? "mr-auto text-left" : "ml-auto bg-zinc-700 p-4"
        )}
      >
        {message.message}
      </div>
    </div>
  );
};
