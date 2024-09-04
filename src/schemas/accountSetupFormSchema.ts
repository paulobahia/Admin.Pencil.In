import { z } from 'zod'

export const AccountSetupFormSchema = z.object({
  userName: z.string().min(1, { message: 'O nome do usuário é obrigatório' }),
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  timeZone: z.string().min(1, { message: 'O fuso hórario é obrigatório' })
})