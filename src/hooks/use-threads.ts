import { useSelector } from '@/stores';
import { Thread } from '@/types/chat';

export const useThread = (roomName: string): Thread | undefined => {
  const thread = useSelector((state) => {
    const room = state.chat.rooms.find((item) => item.roomName === roomName);
    return room;
  });

  return thread;
};
