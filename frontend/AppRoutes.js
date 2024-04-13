import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/pomona">Pomona</Link>
      <Link href="/gibson">Gibson</Link>
    </nav>
  );
}
