import { AxiosInstance } from "axios";

import {
  ChatEntity,
  ChatHistory,
  ChatQuestion,
} from "@/app/chat/[chatId]/types";

export const createChat = async (
  name: string,
  axiosInstance: AxiosInstance
): Promise<ChatEntity> => {
  const createdChat = (
    await axiosInstance.post<ChatEntity>("/chat", { name: name })
  ).data;

  return createdChat;
};

export const getChats = async (
  axiosInstance: AxiosInstance
): Promise<ChatEntity[]> => {
  const response = await axiosInstance.get<{
    chats: ChatEntity[];
  }>(`/chat`);

  return response.data.chats;
};

export const deleteChat = async (
  chatId: string,
  axiosInstance: AxiosInstance
): Promise<void> => {
  await axiosInstance.delete(`/chat/${chatId}`);
};

export type AddQuestionParams = {
  chatId: string;
  chatQuestion: ChatQuestion;
  brainId: string;
};


export const addQuestion = async (
  { chatId, chatQuestion, brainId }: AddQuestionParams,
  axiosInstance: AxiosInstance
): Promise<ChatHistory> => {
  const response = await axiosInstance.post<ChatHistory>(
    `/chat/${chatId}/question?brain_id=${brainId}`,
    chatQuestion
  );

  return response.data;
};

export const addMermaidQuestion = async (
  { chatId, chatQuestion, brainId }: AddQuestionParams,
  axiosInstance: AxiosInstance
): Promise<ChatHistory> => {
  console.log('Gkiri:chat.ts addQuestion Mermaid brainID=', brainId);
  const response = await axiosInstance.post<ChatHistory>(
    `/chat/${chatId}/mermaidquestion?brain_id=${brainId}`,
    chatQuestion
  );

  return response.data;
};

export const getHistory = async (
  chatId: string,
  axiosInstance: AxiosInstance
): Promise<ChatHistory[]> =>
  (await axiosInstance.get<ChatHistory[]>(`/chat/${chatId}/history`)).data;

export type ChatUpdatableProperties = {
  chat_name?: string;
};
export const updateChat = async (
  chatId: string,
  chat: ChatUpdatableProperties,
  axiosInstance: AxiosInstance
): Promise<ChatEntity> => {
  return (await axiosInstance.put<ChatEntity>(`/chat/${chatId}/metadata`, chat))
    .data;
};


export type SummarizeChatParams = {
  text: string;
};

// export const summarizeChat2 = async (
//   { text }: SummarizeChatParams,
//   axiosInstance: AxiosInstance
// ): Promise<any> => {  // Assuming the response type is any. Replace 'any' with the actual response type.
//   const response = await axiosInstance.post(
//     `/chat/summarize2`,
//     { text }
//   );

//   return response.data;
// };


export const summaryChat = async (
  text: string,
  axiosInstance: AxiosInstance
): Promise<any> => {
  const summarizedChat = (
    await axiosInstance.post("/chat/summary", { text: text })
  ).data;

  return summarizedChat;
};


// export const getHistory2 = async (
//   axiosInstance: AxiosInstance
// ): Promise<ChatHistory[]> =>
//   (await axiosInstance.get<ChatHistory[]>(`/chat/history2`)).data;

export const getHistory2 = async (
  chatId: string,
  axiosInstance: AxiosInstance
): Promise<ChatHistory[]> =>
  (await axiosInstance.get<ChatHistory[]>(`/chat/${chatId}/history2`)).data;