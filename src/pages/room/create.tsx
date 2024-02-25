import { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/button';
import Input from '@/components/input';
import Title from '@/components/common/title';
import { useInput } from '@/hooks/use-input';
import { useRoom } from '@/hooks/use-room';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks/use-user';

export default function CreateRoom() {
  const router = useRouter();
  const { value, onChange, isEmpty } = useInput('');
  const { rooms, handleAddRoom } = useRoom();
  const { isAuth } = useUser();

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth, router]);

  if (!isAuth) return null;

  const handleAddNewRoom = () => {
    const isDuplicateRoom = rooms.some((item) => item.roomName === value);

    if (isDuplicateRoom) {
      alert('ชื่อห้องนี้ถูกใช้งานแล้ว กรุณาลองใหม่อีกครั้ง');
      return;
    }

    handleAddRoom(value);
    router.push(`/room/${value}`);
  };

  return (
    <>
      <div className="content__wrapper animated fade-in-up">
        <Title title="สร้างห้องใหม่" />
        <Input
          value={value}
          onChange={onChange}
        />
        <div className="action__wrapper flex-row">
          <Link
            href={`/lobby`}
            passHref
          >
            <Button
              variant="text"
              text="กลับ"
            />
          </Link>

          <Button
            variant="contained"
            text="ยืนยัน"
            disabled={isEmpty}
            onClick={handleAddNewRoom}
          />
        </div>
      </div>
    </>
  );
}
