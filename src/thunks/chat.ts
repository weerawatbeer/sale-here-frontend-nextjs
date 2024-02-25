import { slice } from '@/slices/chat';
import type { AppThunk } from '@/stores';
import type { AddMessageParams, AddRoomParams, Message, SetCurrentUserParams } from '@/types/chat';
import { createResourceId } from '@/utils/create-resource-id';

const setCurrentUser =
  (params: SetCurrentUserParams): AppThunk =>
  (dispatch): void => {
    dispatch(slice.actions.setCurrentUser(params.userName));
  };

const addRoom =
  (params: AddRoomParams): AppThunk =>
  (dispatch): void => {
    dispatch(slice.actions.addRoom(params.roomName));
  };

const addMessage =
  (params: AddMessageParams): AppThunk =>
  async (dispatch): Promise<string> => {
    const { body, threadId, userId, userName } = params;

    const message: Message = {
      id: createResourceId(),
      body,
      createdAt: new Date().getTime(),
      authorId: userId,
      authorName: userName,
    };

    dispatch(slice.actions.addMessage({ message, threadId: threadId! }));
    return threadId!;
  };

export const thunks = {
  setCurrentUser,
  addRoom,
  addMessage,
};
