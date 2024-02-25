import { KeyboardEvent, useCallback, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import Input from '@/components/input';
import Title from '@/components/common/title';
import ChatMessages from '@/components/chat/chat-messages';
import { useInput } from '@/hooks/use-input';
import { useThread } from '@/hooks/use-threads';
import { useUser } from '@/hooks/use-user';
import { useDispatch } from '@/stores';
import { thunks } from '@/thunks/chat';

export default function Room() {
  const { value, onChange, onReset, isEmpty } = useInput('');
  const router = useRouter();
  const dispatch = useDispatch();
  const roomName = router.query.id as string;
  const thread = useThread(roomName);
  const { user } = useUser();

  useEffect(() => {
    if (!thread) {
      router.push('/');
    }
  }, [thread, router]);

  useEffect(() => {
    scroller.scrollTo('myScrollToElement', {
      smooth: true,
      containerId: 'messageWrapper',
    });
  }, []);

  const handleSend = useCallback(
    async (body: string): Promise<void> => {
      if (thread) {
        try {
          dispatch(
            thunks.addMessage({
              threadId: thread.id,
              body,
              userId: user.userId,
              userName: user.userName,
            })
          );
        } catch (err) {
          console.error(err);
        }

        return;
      }
    },
    [dispatch, thread, user]
  );

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isEmpty) return;
    if (e.key === 'Enter' && !isEmpty) {
      handleSend(value).then(() => onReset());

      scroller.scrollTo('myScrollToElement', {
        smooth: true,
        containerId: 'messageWrapper',
      });
    }
  };

  return (
    <>
      <Title title={`ห้อง ${roomName}`} />
      <div className="thread__contianer">
        <div
          className="message__wrapper"
          id="messageWrapper"
        >
          <div className="message-container">
            <div className="group__wrapper">
              <p className="thread-user">คุณ eiei</p>
              <div className="text__wrapper">
                <p>สวัสดี</p>
              </div>
            </div>
          </div>

          <ChatMessages messages={thread?.messages || []} />
          <Element name="myScrollToElement" />
        </div>
        <div className="thread-input__wrapper">
          <Input
            value={value}
            onChange={onChange}
            onKeyDown={handleEnter}
          />
          <p className="label-text">Enter เพื่อส่ง</p>
        </div>
      </div>
    </>
  );
}
