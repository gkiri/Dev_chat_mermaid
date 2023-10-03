
import { useChatContext } from "@/lib/context";

import { ChatMessages } from "./ChatMessages";
import { ShortCuts } from "./ShortCuts";

type ChatDialogProps = {
  setShowSecondChat: React.Dispatch<React.SetStateAction<boolean>>;
  setSummarizedText: React.Dispatch<React.SetStateAction<string>>;
};

export const ChatDialog = ({ setShowSecondChat, setSummarizedText}: ChatDialogProps): JSX.Element => {
  const { history } = useChatContext();

  const shouldDisplayShortcuts = history.length === 0;

  if (!shouldDisplayShortcuts) {
    return <ChatMessages setShowSecondChat={setShowSecondChat} setSummarizedText={setSummarizedText} />;
  }

  return <ShortCuts />;
};
