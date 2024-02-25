import { useCallback } from 'react';
import { thunks } from '@/thunks/chat';
import { useDispatch, useSelector } from '@/stores';

export const useUser = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.chat.currentUser);

  const isAuth = !!user.userId;

  const handleSetCurrentUser = useCallback(
    (userName: string): void => {
      dispatch(thunks.setCurrentUser({ userName }));
    },
    [dispatch]
  );

  return { user, isAuth, handleSetCurrentUser };
};
