import { createContext, useEffect, useState } from "react";

export const MessageContext = createContext();

export default function MessageContextProvider({ children }) {
  const [messageContent, setMessageContent] = useState("");
  const [messageContentType, setMessageContentType] = useState("");
  useEffect(() => {
    switch (messageContentType) {
      case "please1":
        setMessageContent("Why...");
        break;
      case "please2":
        setMessageContent("But why...");
        break;
      case "please3":
        setMessageContent("Second thoughts...?");
        break;
      case "please4":
        setMessageContent("Umm..., Are you sure?");
        break;
      case "please5":
        setMessageContent("Asking for last time...");
        break;
      case "yes":
        setMessageContent("I like you too");
        break;
      case "no":
        setMessageContent("I hate you too");
        break;

      default:
        break;
    }
  }, [messageContentType]);

  return (
    <MessageContext.Provider
      value={{
        messageContent,
        setMessageContent,
        messageContentType,
        setMessageContentType,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
