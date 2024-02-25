import type { PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  id: string;
  body: string;
  createdAt: number;
  authorId: string;
  authorName: string;
}

export interface Thread {
  id: string;
  roomName: string;
  messages: Message[];
}

export type AddMessageParams = {
  threadId?: string;
  body: string;
  userId: string;
  userName: string;
};

export type SetCurrentUserParams = {
  userName: string;
};

export type AddRoomParams = {
  roomName: string;
};

export type AddMessageAction = PayloadAction<{ message: Message; threadId: string }>;
export type SetCurrentUserAction = PayloadAction<string>;
export type AddRoomAction = PayloadAction<string>;
