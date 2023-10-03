import { useParams } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";

import { ChatQuestion } from "@/app/chat/[chatId]/types";
import { useChatApi } from "@/lib/api/chat/useChatApi";
import { useBrainContext } from "@/lib/context/BrainProvider/hooks/useBrainContext";
import { useAxios } from "@/lib/hooks";
import { cn } from "@/lib/utils";

import { QuestionBrain } from "./components/QuestionBrain";
import { QuestionPrompt } from "./components/QuestionPrompt";

type ChatMessageProps = {
  speaker: string;
  text: string;
  brainName?: string | null;
  promptName?: string | null;
  setShowSecondChat: React.Dispatch<React.SetStateAction<boolean>>;
  setSummarizedText: React.Dispatch<React.SetStateAction<string>>;
};


export const ChatMessage = React.forwardRef(
  (
    { speaker, text, brainName, promptName, setShowSecondChat,setSummarizedText  }: ChatMessageProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    
    //const [summarizedText, setSummarizedText] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const { summaryChat, addMermaidQuestion } = useChatApi();  

    const { fetchAllBrains, fetchDefaultBrain, defaultBrainId } =useBrainContext();
    const params = useParams();
    const chatId = params?.chatId as string | undefined;   
    //const brainId = params?.brainId as UUID | undefined;
    //brainId=defaultBrainId;
    
    const { axiosInstance } = useAxios();
    
    const chatQuestion: ChatQuestion = {
      question: text,
      max_tokens: 2048,
      model: "gpt-3.5-turbo",
      temperature: 0.15,
    };

    const handleSummarize = async () => {
      setLoading(true);
      setShowSecondChat(true);
      try {
        console.log('Gkiri:Input to the summary=', text);
        console.log('Gkiri:ChatMessage.tsx setShowSecondChat=', setShowSecondChat);
        //console.log('Gkiri:ChatMessage.tsx setSummarizedText=', summarizedText);
        console.log('Gkiri:Mermaid chatId=,brainID=',chatId, defaultBrainId);
        const response = await addMermaidQuestion({ chatId, chatQuestion, brainId:defaultBrainId });
        console.log('Gkiri:Mermaid response.assistant=', response.assistant);
        setSummarizedText(response.assistant);  // Set the summarized text to with response
      } catch (error) {
        console.error('Error summarizing text:', error);
      } finally { 
        setLoading(false);
      }
    };

    const isUserSpeaker = speaker === "user";
    const containerClasses = cn(
      "py-3 px-5 w-fit ",
      isUserSpeaker
        ? "bg-gray-100 bg-opacity-60 items-start "
        : "bg-purple-100 bg-opacity-60 items-end",
      "dark:bg-gray-800 rounded-3xl flex flex-col overflow-hidden scroll-pb-32"
    );

    const containerWrapperClasses = cn(
      "flex flex-col",

      isUserSpeaker ? "items-end" : "items-start"
    );

    const markdownClasses = cn("prose", "dark:prose-invert");

    return (
      <div className={containerWrapperClasses}>
        {" "}
        <div ref={ref} className={containerClasses}>
          <div className="w-full gap-1 flex">
            <QuestionBrain brainName={brainName} />
            <QuestionPrompt promptName={promptName} />
          </div>
          <div data-testid="chat-message-text">
            <ReactMarkdown className={markdownClasses}>{text}</ReactMarkdown>
          </div>

          {speaker === 'assistant' && (
            <div className="mt-2">
              <button onClick={handleSummarize} disabled={loading}>
                {loading ? 'Summarizing...' : 'Summarize'}
              </button>
            </div>
          )}
          
        </div>
      </div>
    );
  }
);

ChatMessage.displayName = "ChatMessage";
