import Button from '@/components/button';
import Input from '@/components/input';
import Title from '@/components/common/title';
import { useInput } from '@/hooks/use-input';
import { useRoom } from '@/hooks/use-room';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks/use-user';
import { useEffect } from 'react';

export default function JoinRoom() {
  const router = useRouter();
  const { value, onChange, isEmpty } = useInput('');
  const { rooms } = useRoom();
  const { isAuth } = useUser();

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth, router]);

  const handleJoinRoom = () => {
    const isHaveRoom = rooms.some((item) => item.roomName === value);

    if (!isHaveRoom) {
      alert('ไม่มีชื่อห้องที่คุณต้องการ กรุณาลองใหม่อีกครั้ง');
      return;
    }

    router.push(`/room/${value}`);
  };

  return (
    <>
      <div className="content__wrapper animated fade-in-up">
        <Title title="เข้าร่วมแชท" />
        <Input
          placeholder="ชื่อห้อง"
          value={value}
          onChange={onChange}
        />
        <div className="action__wrapper flex-row">
          <Button
            variant="text"
            text="กลับ"
            onClick={() => router.push('/lobby')}
          />

          <Button
            variant="contained"
            text="เข้าร่วม"
            disabled={isEmpty}
            onClick={handleJoinRoom}
          />
        </div>
      </div>
    </>
  );
}
