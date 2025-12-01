'use server';

import { recommendLearningPath, RecommendLearningPathInput, RecommendLearningPathOutput } from "@/ai/flows/recommend-learning-path";

export async function generateLearningPath(input: RecommendLearningPathInput): Promise<RecommendLearningPathOutput> {
  try {
    const output = await recommendLearningPath(input);
    // The AI might return markdown, so we'll process it to basic HTML for display
    const formattedHtml = output.learningPath
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
      .replace(/^- (.*$)/gm, '<ul><li>$1</li></ul>') // Basic lists
      .replace(/<\/ul>\n<ul>/g, '') // Merge adjacent lists
      .replace(/\n/g, '<br />');

    return { learningPath: formattedHtml };
  } catch (error) {
    console.error("Error in generateLearningPath:", error);
    throw new Error("Failed to generate learning path.");
  }
}
