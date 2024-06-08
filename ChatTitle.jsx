import { useEffect } from "react";

export default function ChatTitle(count) {
    useEffect(() => {
        console.log("clicked");
        if (count >= 1) {
          document.title = `(${count}) Chats`;
        } else {
          document.title = "Chats";
        }
      }, [count]);
}