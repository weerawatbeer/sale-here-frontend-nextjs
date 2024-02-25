import Link from 'next/link';
import Button from '@/components/button';
import Input from '@/components/input';
import Title from '@/components/common/title';
import { useUser } from '@/hooks/use-user';
import { useInput } from '@/hooks/use-input';

export default function Home() {
  const { value, onChange, isEmpty } = useInput('');
  const { handleSetCurrentUser } = useUser();

  return (
    <>
      <div className="content__wrapper animated fade-in-up">
        <Title title="ชื่อของคุณ" />
        <Input
          value={value}
          onChange={onChange}
        />
        {!isEmpty && (
          <Link
            href="/lobby"
            passHref
            onClick={() => handleSetCurrentUser(value)}
          >
            <Button
              className="animated fade-in-up"
              variant="contained"
              text="ยืนยัน"
            />
          </Link>
        )}
      </div>
    </>
  );
}
