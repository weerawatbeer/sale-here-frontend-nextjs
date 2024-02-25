import { useCallback } from 'react';
import { thunks } from '@/thunks/chat';
import { useDispatch, useSelector } from '@/stores';

export const useRoom = () => {
  const dispatch = useDispatch();

  const rooms = useSelector((state) => {
    const { rooms } = state.chat;
    return rooms;
  });

  const handleAddRoom = useCallback(
    (roomName: string): void => {
      dispatch(thunks.addRoom({ roomName }));
    },
    [dispatch]
  );

  return { handleAddRoom, rooms };
};
