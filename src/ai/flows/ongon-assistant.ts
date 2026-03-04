'use server';
/**
 * @fileOverview General purpose AI Assistant flow for ONGON BANGLADESH.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const OngonAssistantInputSchema = z.object({
  message: z.string().describe('The message from the user.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string()
  })).optional().describe('Chat history for context.'),
});
export type OngonAssistantInput = z.infer<typeof OngonAssistantInputSchema>;

const OngonAssistantOutputSchema = z.object({
  response: z.string().describe('The helpful response from the AI.'),
});
export type OngonAssistantOutput = z.infer<typeof OngonAssistantOutputSchema>;

const prompt = ai.definePrompt({
  name: 'ongonAssistantPrompt',
  input: { schema: OngonAssistantInputSchema },
  output: { schema: OngonAssistantOutputSchema },
  prompt: `You are the official AI Assistant for "ONGON BANGLADESH", an NGO platform dedicated to community aid, blood donation, and safety.

  YOUR GOALS:
  1. Assist users in finding help (aid requests).
  2. Explain how to donate or register as a blood donor.
  3. Provide information about volunteering and careers at ONGON.
  4. Answer questions about the chairman Dipanjan Swapna Prangon and the organization's mission.
  5. Help with safety concerns (direct them to /safety if needed).

  RULES:
  1. Language: Always respond in Bengali (Bangla).
  2. Tone: Helpful, professional, and empathetic.
  3. Be concise: Avoid extremely long paragraphs.
  4. If you don't know something, suggest contacting support@ongonbd.org.

  User Message: {{{message}}}`,
});

export async function getAssistantResponse(input: OngonAssistantInput): Promise<OngonAssistantOutput> {
  const { output } = await prompt(input);
  if (!output) throw new Error('Failed to get AI response');
  return output;
}
