import { z } from "zod";

 
export const createBodySchema = z.object({
    name: z.string(),
    document: z.string(),
    pixKey: z.string(),
});

export  type CreateBodySchemaType = z.infer<typeof createBodySchema>;


export const createCategoryBodySchema = z.object({
    name: z.string(),
    slug: z.string(),
});

export type CreateCategoryBodySchemaType = z.infer<typeof createBodySchema>;
