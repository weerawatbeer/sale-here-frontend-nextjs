import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="main">
        <div className="logo__wrapper">
          <Link
            href="/"
            passHref
          >
            <Image
              src="/assets/images/logo.png"
              width="128"
              height="30"
              alt="logo"
              style={{
                objectFit: 'contain',
                width: '100%',
              }}
              priority
            />
          </Link>
        </div>
        <div className="container">{children}</div>
      </main>
    </>
  );
}
