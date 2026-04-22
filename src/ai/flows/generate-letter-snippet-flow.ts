'use server';
/**
 * @fileOverview A Genkit flow for generating short, personalized letter snippets.
 *
 * - generateLetterSnippet - A function that handles the letter snippet generation process.
 * - GenerateLetterSnippetInput - The input type for the generateLetterSnippet function.
 * - GenerateLetterSnippetOutput - The return type for the generateLetterSnippet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLetterSnippetInputSchema = z.object({
  theme: z
    .string()
    .describe('Themes or keywords to inspire the letter snippet.'),
});
export type GenerateLetterSnippetInput = z.infer<
  typeof GenerateLetterSnippetInputSchema
>;

const GenerateLetterSnippetOutputSchema = z.object({
  letterSnippet: z
    .string()
    .describe('A short, personalized letter snippet in a romantic and reflective style.'),
});
export type GenerateLetterSnippetOutput = z.infer<
  typeof GenerateLetterSnippetOutputSchema
>;

export async function generateLetterSnippet(
  input: GenerateLetterSnippetInput,
): Promise<GenerateLetterSnippetOutput> {
  return generateLetterSnippetFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLetterSnippetPrompt',
  input: {schema: GenerateLetterSnippetInputSchema},
  output: {schema: GenerateLetterSnippetOutputSchema},
  prompt: `You are an AI assistant skilled at crafting short, romantic, and reflective letter snippets, inspired by the style of 'Cartas para Helena'. Your task is to generate a beautiful, introspective passage based on the provided theme or keywords.

The letter snippet should evoke a sense of deep emotion, memory, or contemplation, similar to letters written to a beloved who is deeply missed or cherished.

Theme/Keywords: {{{theme}}}

Generate a letter snippet of approximately 3-5 sentences.`,
});

const generateLetterSnippetFlow = ai.defineFlow(
  {
    name: 'generateLetterSnippetFlow',
    inputSchema: GenerateLetterSnippetInputSchema,
    outputSchema: GenerateLetterSnippetOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  },
);
