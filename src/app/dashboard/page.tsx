'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/header';
import { BookMarked, Clapperboard, Code } from 'lucide-react';

const chartData = [
  { month: "Jan", hours: 18 },
  { month: "Feb", hours: 25 },
  { month: "Mar", hours: 15 },
  { month: "Apr", hours: 32 },
  { month: "May", hours: 28 },
  { month: "Jun", hours: 45 },
];

const chartConfig = {
  hours: {
    label: 'Hours',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

const courses = [
  { title: "Web Development Fundamentals", progress: 75, icon: Code },
  { title: "Introduction to UI/UX", progress: 40, icon: Clapperboard },
  { title: "Data Structures in Python", progress: 90, icon: BookMarked },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/20">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold font-headline">My Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's a summary of your learning progress.</p>
          </header>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Learning Activity</CardTitle>
                <CardDescription>Hours spent learning over the last 6 months.</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] w-full">
                 <ChartContainer config={chartConfig} className="h-full w-full">
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis 
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Bar dataKey="hours" fill="var(--color-hours)" radius={8} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
                <CardDescription>Your progress in ongoing courses.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {courses.map((course) => (
                  <div key={course.title} className="space-y-2">
                    <div className="flex justify-between items-baseline">
                        <div className='flex items-center gap-2'>
                          <course.icon className="h-4 w-4 text-muted-foreground" />
                          <h3 className="font-medium text-sm">{course.title}</h3>
                        </div>
                        <span className="text-sm font-semibold text-primary">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} aria-label={`${course.title} progress`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
