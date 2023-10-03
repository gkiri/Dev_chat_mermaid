"use client";

import { useState } from "react"; // Add this for state management

import { ActionsBar } from "./components/ActionsBar";
import { ChatHeader } from "./components/ChatHeader";
import { ChatDialog } from "./components/Dialog";
import { Mermaid } from "./components/Mermaid/Mermaids";

// ... other imports
const outputCode = "graph LR; A --> B;"; // Example Mermaid code  
//const outpuCode2 = "graph LR

const SelectedChatPage = (): JSX.Element => {
  const [showSecondChat, setShowSecondChat] = useState(false);  // State for controlling second chat visibility
  //const [summarizedText, setSummarizedText] = useState('');
  const [summarizedText, setSummarizedText] = useState<string | null>(null);

  console.log('Gkiri:page.tsx summarizedText=', summarizedText);

  return (
    <main className="flex flex-col w-full pt-10 items-center" data-testid="chat-page">
      <section style={{ width: '1800px' }} className="flex flex-col flex-1 items-center w-full h-full min-h-[70vh]">
        <div className="flex justify-between w-full">
          <ChatHeader />
          {/* Button to toggle the second chat window */}
          <button onClick={() => setShowSecondChat(!showSecondChat)}>Toggle Second Chat</button>
        </div>
        
        <div className="flex-1 flex flex-col mt-8 w-full shadow-md dark:shadow-primary/25 hover:shadow-xl transition-shadow rounded-xl overflow-hidden bg-white dark:bg-black border border-black/10 dark:border-white/25 p-12 pt-10 max-h-[80vh]">
          <div className="flex flex-1 overflow-hidden">
            <div className={`flex flex-1 flex-col overflow-hidden ${showSecondChat ? 'w-1/2 border-r-2 border-gray-300' : 'w-full'}`}>
              {/* Add a border to the right side of the first chat when the second chat is shown */}
              <ChatDialog setShowSecondChat={setShowSecondChat} setSummarizedText={setSummarizedText} />
            </div>
            {/* Conditional rendering of second chat */}
            {showSecondChat && (
              <div className="flex flex-1 flex-col overflow-hidden w-1/2">
                <Mermaid chart= {summarizedText || outputCode}   />
              </div>
            )}
          </div>
          <ActionsBar />
        </div>
      </section>
    </main>
  );
};

export default SelectedChatPage;
