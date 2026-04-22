"use server";

import { generateLetterSnippet } from "@/ai/flows/generate-letter-snippet-flow";
import { z } from "zod";

const GenerateLetterSnippetInputSchema = z.object({
  theme: z.string(),
});

export async function handleGenerateSnippet(input: { theme: string }) {
  const validatedInput = GenerateLetterSnippetInputSchema.safeParse(input);

  if (!validatedInput.success) {
    throw new Error("Invalid input");
  }

  try {
    const result = await generateLetterSnippet(validatedInput.data);
    return result;
  } catch (error) {
    console.error("Error generating letter snippet:", error);
    throw new Error("Failed to generate snippet from AI.");
  }
}
