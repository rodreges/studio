import { BookOpenCheck } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="EduStart Home">
      <BookOpenCheck className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground">EduStart</span>
    </Link>
  );
}
