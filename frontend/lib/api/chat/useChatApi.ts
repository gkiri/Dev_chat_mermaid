import { useAxios } from "@/lib/hooks";

import {
  addMermaidQuestion,
  addQuestion,
  AddQuestionParams,
  ChatUpdatableProperties,
  createChat,
  deleteChat,
  getChats,
  getHistory,
  summaryChat,
  updateChat
} from "./chat";

// TODO: split './chat.ts' into multiple files, per function for example
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useChatApi = () => {
  const { axiosInstance } = useAxios();

  return {
    createChat: async (chatName: string) => createChat(chatName, axiosInstance),
    summaryChat:async (chatName: string) => summaryChat(chatName, axiosInstance),
    getChats: async () => getChats(axiosInstance),
    deleteChat: async (chatId: string) => deleteChat(chatId, axiosInstance),
    addQuestion: async (props: AddQuestionParams) =>
      addQuestion(props, axiosInstance),  
    addMermaidQuestion: async (props: AddQuestionParams) =>
      addMermaidQuestion(props, axiosInstance),
    getHistory: async (chatId: string) => getHistory(chatId, axiosInstance),
    updateChat: async (chatId: string, props: ChatUpdatableProperties) =>
      updateChat(chatId, props, axiosInstance),
  };
};
