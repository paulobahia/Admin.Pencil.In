import { z } from 'zod'

export const ProfileDescriptionSchema = z.object({
  description: z.string().min(10, { message: "A descrição deve ter no mínimo 10 caractere.", })
})