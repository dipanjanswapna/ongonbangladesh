'use server';
/**
 * @fileOverview AI flow for providing safety support and psychological first aid.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SafetyChatInputSchema = z.object({
  message: z.string().describe('The message from the user.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string()
  })).optional().describe('Chat history for context.'),
});
export type SafetyChatInput = z.infer<typeof SafetyChatInputSchema>;

const SafetyChatOutputSchema = z.object({
  response: z.string().describe('The empathetic response from the AI.'),
  suggestedAction: z.string().optional().describe('A quick action like "Call 999" or "Contact 109".'),
});
export type SafetyChatOutput = z.infer<typeof SafetyChatOutputSchema>;

const prompt = ai.definePrompt({
  name: 'safetyChatPrompt',
  input: { schema: SafetyChatInputSchema },
  output: { schema: SafetyChatOutputSchema },
  prompt: `You are an empathetic and professional AI Support Agent for "ONGON BANGLADESH". 
  Your role is to provide psychological first aid and safety information to victims of harassment or violence.

  RULES:
  1. Language: Always respond in Bengali (Bangla).
  2. Tone: Be extremely calm, non-judgmental, and supportive.
  3. Safety First: If the user is in immediate danger, prioritize telling them to call 999.
  4. Information: Provide info about helplines: 109 (Women/Children abuse), 10921 (Legal Aid).
  5. Disclaimer: State that you are an AI and not a human counselor for serious trauma therapy.
  6. Context: Use the history if provided.

  User Message: {{{message}}}`,
});

export async function getSafetySupport(input: SafetyChatInput): Promise<SafetyChatOutput> {
  const { output } = await prompt(input);
  if (!output) throw new Error('Failed to get AI response');
  return output;
}
