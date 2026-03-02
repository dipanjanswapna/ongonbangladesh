'use server';
/**
 * @fileOverview An AI agent for automatically categorizing aid requests.
 *
 * - autoCategorizeAidRequest - A function that categorizes an aid request.
 * - AutoCategorizeAidRequestInput - The input type for the autoCategorizeAidRequest function.
 * - AutoCategorizeAidRequestOutput - The return type for the autoCategorizeAidRequest function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AutoCategorizeAidRequestInputSchema = z.object({
  description: z.string().describe('The description of the aid request.'),
});
export type AutoCategorizeAidRequestInput = z.infer<typeof AutoCategorizeAidRequestInputSchema>;

const AutoCategorizeAidRequestOutputSchema = z.object({
  categories: z.array(z.string()).describe('An array of suggested categories for the aid request. Possible categories include: medical, education, food, housing, shelter, financial, clothing, legal, mental health, employment, transportation, sanitation, disaster relief, general.'),
});
export type AutoCategorizeAidRequestOutput = z.infer<typeof AutoCategorizeAidRequestOutputSchema>;

const prompt = ai.definePrompt({
  name: 'autoCategorizeAidRequestPrompt',
  input: { schema: AutoCategorizeAidRequestInputSchema },
  output: { schema: AutoCategorizeAidRequestOutputSchema },
  prompt: `You are an AI assistant specialized in categorizing aid requests for an NGO.\nYour task is to analyze the provided aid request description and suggest the most appropriate categories from the following predefined list. Select one or more categories that best fit the request.\n\nPredefined categories: medical, education, food, housing, shelter, financial, clothing, legal, mental health, employment, transportation, sanitation, disaster relief, general.\n\nAid Request Description: {{{description}}}`,
});

const autoCategorizeAidRequestFlow = ai.defineFlow(
  {
    name: 'autoCategorizeAidRequestFlow',
    inputSchema: AutoCategorizeAidRequestInputSchema,
    outputSchema: AutoCategorizeAidRequestOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to categorize aid request.');
    }
    return output;
  }
);

export async function autoCategorizeAidRequest(input: AutoCategorizeAidRequestInput): Promise<AutoCategorizeAidRequestOutput> {
  return autoCategorizeAidRequestFlow(input);
}
