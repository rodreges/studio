'use client';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { BlobOne, BlobTwo, BlobThree, BlobFour } from '@/components/blobs';

export default function MobileLearningPage() {
  const onlineLearningImage = {
    imageUrl: 'https://picsum.photos/seed/online-learning/400/300',
    imageHint: 'online learning',
  };
  const readingImage = {
    imageUrl: 'https://picsum.photos/seed/reading-books/400/300',
    imageHint: 'reading books',
  };

  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden bg-white">
      {/* Background Blobs */}
      <BlobOne className="absolute -top-40 -left-40 text-primary/80" />
      <BlobTwo className="absolute -top-40 -right-20 text-accent/60" />
      <BlobThree className="absolute bottom-[-350px] -left-20 text-primary" />
      <BlobFour className="absolute bottom-[200px] right-[-200px] text-accent/60" />
      
      <main className="flex flex-col flex-1 z-10 px-8 py-12">
        <h1 className="text-5xl font-bold text-white mb-10">Let's learn</h1>

        <div className="flex-1 flex flex-col justify-center items-center gap-8">
            <div className="relative w-64 h-48 bg-white p-3 rounded-3xl shadow-lg -rotate-6 transform">
                <Image
                    src={onlineLearningImage.imageUrl}
                    alt="A person learning online"
                    width={400}
                    height={300}
                    data-ai-hint={onlineLearningImage.imageHint}
                    className="rounded-2xl object-cover w-full h-full"
                />
            </div>
            <div className="relative w-64 h-48 bg-white p-3 rounded-3xl shadow-lg rotate-6 transform">
                <Image
                    src={readingImage.imageUrl}
                    alt="A person reading books"
                    width={400}
                    height={300}
                    data-ai-hint={readingImage.imageHint}
                    className="rounded-2xl object-cover w-full h-full"
                />
            </div>
        </div>
      </main>

      <footer className="w-full flex justify-center p-8 z-10">
        <Button size="lg" className="w-full max-w-xs text-lg" asChild>
          <Link href="/signup">Get Started</Link>
        </Button>
      </footer>
    </div>
  );
}
