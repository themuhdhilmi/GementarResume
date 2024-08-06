import { z } from "zod";

export const zodPublicProcedure = z.object({text: z.string()})
export const zodProtectedProcedurer = z.object({name: z.string().min(1)})