'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const learningImage = {
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1740&auto=format&fit=crop',
    imageHint: 'online learning student',
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-rose-50 to-cyan-50">
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-md w-full">
            <Image
                src={learningImage.imageUrl}
                alt="A student learning online"
                width={500}
                height={500}
                data-ai-hint={learningImage.imageHint}
                className="rounded-full aspect-square object-cover w-64 h-64 mx-auto mb-8 shadow-xl border-4 border-white"
            />
            
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
                Unlock Your Potential
            </h1>

            <p className="text-muted-foreground md:text-lg mb-8">
                Personalized learning paths to help you achieve your goals. Start your journey with us today.
            </p>

            <Button size="lg" className="w-full max-w-xs text-lg" asChild>
                <Link href="/signup">Start Learning</Link>
            </Button>
        </div>
      </main>
    </div>
  );
}
