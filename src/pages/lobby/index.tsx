import Button from '@/components/button';
import Title from '@/components/common/title';
import { useUser } from '@/hooks/use-user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function JoinRoom() {
  const router = useRouter();
  const { isAuth, user } = useUser();

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth, router]);

  if (!isAuth) return null;

  return (
    <>
      <div className="lobby__wrapper animated fade-in-up">
        <Title title={`คุณ ${user.userName}`} />
        <div className="action__wrapper">
          <Link href="/room/create">
            <Button
              size="large"
              text="สร้างห้องใหม่"
            />
          </Link>
          <Link href="/room/join">
            <Button
              variant="text"
              size="large"
              text="เข้าร่วมแชท"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
