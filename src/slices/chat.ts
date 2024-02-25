import { createSlice } from '@reduxjs/toolkit';
import type { AddMessageAction, AddRoomAction, SetCurrentUserAction, Thread } from '@/types/chat';
import { createResourceId } from '@/utils/create-resource-id';

interface ChatState {
  currentUser: {
    userId: string;
    userName: string;
  };
  rooms: Thread[];
}

const initialState: ChatState = {
  currentUser: {
    userId: '',
    userName: '',
  },
  rooms: [],
};

const reducers = {
  addMessage(state: ChatState, action: AddMessageAction): void {
    const { threadId, message } = action.payload;
    const thread = state.rooms.find((item) => item.id === threadId);

    if (thread) {
      thread.messages.push(message);
    }
  },

  setCurrentUser(state: ChatState, action: SetCurrentUserAction): void {
    state.currentUser.userId = createResourceId();
    state.currentUser.userName = action.payload;
  },

  addRoom(state: ChatState, action: AddRoomAction): void {
    const newRoom: Thread = {
      id: createResourceId(),
      roomName: action.payload,
      messages: [],
    };
    state.rooms.push(newRoom);
  },
};

export const slice = createSlice({
  name: 'chat',
  initialState,
  reducers,
});

export const { reducer } = slice;
