import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center bg-transparent backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto flex w-full items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
          <a href="/#create-path" className="text-sm font-medium hover:text-primary transition-colors">Create Path</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild><Link href="/login">Log in</Link></Button>
          <Button asChild><Link href="/signup">Sign Up</Link></Button>
        </div>
      </div>
    </header>
  );
}
