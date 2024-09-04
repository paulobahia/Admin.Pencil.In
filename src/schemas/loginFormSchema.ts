import { z } from 'zod'

export const LoginFormSchema = z.object({
  email: z.string().min(1, { message: 'O e-mail é obrigatório' }).email('Formato de e-mail inválido'),
  password: z.string().min(8, 'A senha precisa ter no mínimo 8 caracteres')
})