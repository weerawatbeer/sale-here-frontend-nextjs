import { useUser } from '@/hooks/use-user';
import { Message } from '@/types/chat';

interface ChatMessagesProps {
  messages?: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const { user } = useUser();
  return (
    <div>
      {messages?.map((item, index) => {
        const isAuthor = item.authorId === user.userId;
        return (
          <div
            className={`message-container ${isAuthor && 'author'}`}
            key={index}
          >
            <div className={`group__wrapper ${isAuthor && 'author'}`}>
              {!isAuthor && <p className="thread-user">คุณ {item.authorName}</p>}
              <div className={`text__wrapper ${isAuthor && 'author'}`}>
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
