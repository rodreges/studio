'use server';

/**
 * @fileOverview AI flow to recommend a personalized learning path based on user interests and goals.
 *
 * recommendLearningPath - Function to generate learning path recommendations.
 * RecommendLearningPathInput - Input type for the function.
 * RecommendLearningPathOutput - Output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendLearningPathInputSchema = z.object({
  interests: z.string().describe('User interests (e.g., technology, arts, science).'),
  goals: z.string().describe('User goals (e.g., career change, skill development, personal enrichment).'),
  experienceLevel: z.string().describe('User experience level (e.g., beginner, intermediate, advanced).'),
});
export type RecommendLearningPathInput = z.infer<typeof RecommendLearningPathInputSchema>;

const RecommendLearningPathOutputSchema = z.object({
  learningPath: z.string().describe('A personalized learning path with recommended courses and resources.'),
});
export type RecommendLearningPathOutput = z.infer<typeof RecommendLearningPathOutputSchema>;

export async function recommendLearningPath(input: RecommendLearningPathInput): Promise<RecommendLearningPathOutput> {
  return recommendLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendLearningPathPrompt',
  input: {schema: RecommendLearningPathInputSchema},
  output: {schema: RecommendLearningPathOutputSchema},
  prompt: `You are an AI learning path generator. Based on the user's interests, goals, and experience level, you will generate a personalized learning path with recommended courses and resources.\n\nUser Interests: {{{interests}}}\nUser Goals: {{{goals}}}\nUser Experience Level: {{{experienceLevel}}}\n\nRecommended Learning Path: `,
});

const recommendLearningPathFlow = ai.defineFlow(
  {
    name: 'recommendLearningPathFlow',
    inputSchema: RecommendLearningPathInputSchema,
    outputSchema: RecommendLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
