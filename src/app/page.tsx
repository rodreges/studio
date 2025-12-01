'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { OnlineLearningIllustration, ReadingIllustration } from '@/components/illustrations';
import { BlobOne, BlobTwo, BlobThree } from '@/components/blobs';

export default function LandingPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background overflow-hidden">
      {/* Background Blobs */}
      <BlobOne className="absolute -top-40 -left-40 text-primary opacity-80" />
      <BlobTwo className="absolute -top-20 -right-60 text-accent/50" />
      <BlobThree className="absolute -bottom-80 -right-40 text-primary" />
      <BlobTwo className="absolute bottom-60 -left-40 text-accent/30" />


      <main className="flex-1 flex flex-col justify-between p-8 z-10">
        <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-white mb-16 -rotate-6">
                Let's learn
            </h1>

            <div className="relative mb-12">
                <div className="absolute -inset-4 bg-white/80 backdrop-blur-sm rounded-[45%] transform -rotate-6"></div>
                <div className="relative">
                    <OnlineLearningIllustration className="w-full max-w-sm mx-auto" />
                </div>
            </div>

            <div className="relative mb-12 self-end">
                <div className="absolute -inset-4 bg-white/80 backdrop-blur-sm rounded-[45%] transform rotate-3"></div>
                 <div className="relative">
                    <ReadingIllustration className="w-full max-w-xs mx-auto" />
                </div>
            </div>
        </div>
        
        <div className="flex-shrink-0 pb-8">
            <Button size="lg" className="w-full max-w-xs mx-auto text-lg bg-accent text-primary-foreground hover:bg-accent/90 rounded-full h-14 shadow-lg" asChild>
                <Link href="/signup">Get Started</Link>
            </Button>
        </div>
      </main>
    </div>
  );
}
