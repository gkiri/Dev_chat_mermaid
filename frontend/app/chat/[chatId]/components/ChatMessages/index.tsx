import React from "react";
import { useTranslation } from "react-i18next";

import { useChatContext } from "@/lib/context";

import { ChatMessage } from "./components";
import { useChatMessages } from "./hooks/useChatMessages";

// Ensure that you also update the type for the props to include `setShowSecondChat`:
type ChatMessagesProps = {
  setShowSecondChat: React.Dispatch<React.SetStateAction<boolean>>;
  setSummarizedText: React.Dispatch<React.SetStateAction<string | null>>;
};

export const ChatMessages = ({ setShowSecondChat,setSummarizedText}:ChatMessagesProps): JSX.Element => {
  const { history } = useChatContext();
  const { t } = useTranslation(["chat"]);
  const { chatListRef } = useChatMessages();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflowY: "auto",
      }}
      ref={chatListRef}
    >
      {history.length === 0 ? (
        <div
          data-testid="empty-history-message"
          className="text-center opacity-50"
        >
          {t("ask", { ns: "chat" })}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {history.map(
            ({
              assistant,
              message_id,
              user_message,
              brain_name,
              prompt_title,
            }) => (
              <React.Fragment key={message_id}>
                <ChatMessage
                  key={`user-${message_id}`}
                  speaker={"user"}
                  text={user_message}
                  promptName={prompt_title}
                  brainName={brain_name}
                  setShowSecondChat={setShowSecondChat}
                  setSummarizedText={setSummarizedText}
                />
                <ChatMessage
                  key={`assistant-${message_id}`}
                  speaker={"assistant"}
                  text={assistant}
                  brainName={brain_name}
                  promptName={prompt_title}
                  setShowSecondChat={setShowSecondChat}
                  setSummarizedText={setSummarizedText}
                />
              </React.Fragment>
            )
          )}
        </div>
      )}
    </div>
  );
};

