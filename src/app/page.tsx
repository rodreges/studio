import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Palette } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import LearningPathForm from '@/components/learning-path-form';
import Header from '@/components/header';
import { CourseCard } from '@/components/course-card';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  const featuredCourses = [
    {
      id: 'web-dev',
      icon: Code,
      title: 'Web Development',
      description: 'Master the art of building modern, responsive websites and web applications.',
    },
    {
      id: 'data-science',
      icon: Database,
      title: 'Data Science',
      description: 'Unlock insights from data and learn to make predictions with machine learning.',
    },
    {
      id: 'design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive, and user-friendly digital experiences.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background to-secondary/30 -z-20"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/10 rounded-full -z-10 blur-3xl"></div>
          
          <div className="container px-4 md:px-6 py-20 md:py-28">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-headline text-foreground">
                    Your Personalized Journey to Knowledge
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    EduStart uses AI to create a unique learning path tailored to your interests and goals. Start your journey today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <a href="#create-path">
                      Create Your Path
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                {heroImage && (
                  <Image
                    alt="A student learning with a laptop"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-2xl object-cover shadow-2xl"
                    src={heroImage.imageUrl}
                    width={600}
                    height={450}
                    data-ai-hint={heroImage.imageHint}
                    priority
                  />
                )}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-accent rounded-full -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="create-path" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Generate Your Learning Path</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tell us about your interests and goals, and our AI will craft a personalized roadmap for you.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl pt-12">
              <LearningPathForm />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Explore Popular Categories</h2>
               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                 Dive into our most popular categories and start learning something new today.
               </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 pt-12">
              {featuredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  icon={course.icon}
                  title={course.title}
                  description={course.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-6 w-full shrink-0 border-t">
         <p className="text-xs text-muted-foreground">&copy; 2024 EduStart. All rights reserved.</p>
      </footer>
    </div>
  );
}
