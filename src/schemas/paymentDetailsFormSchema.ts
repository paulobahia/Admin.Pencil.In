import { z } from 'zod'

const zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/; // US ZIP Code format
const cardNumberPattern = /^[0-9]{16}$/; // 16-digit card number
const cardExpirationDatePattern = /^(0[1-9]|1[0-2])\/([0-9]{2})$/; // MM/YY format
const cardCvvPattern = /^[0-9]{3,4}$/; // 3 or 4 digit CVV

export const PaymentDetailsFormSchema = z.object({
  billingAddress: z.string().min(1, { message: "O endereço de cobrança é obrigatório." }),
  apartment: z.string().optional(),
  city: z.string().min(1, { message: "A cidade é obrigatória." }),
  state: z.string().min(1, { message: "O Estado é obrigatório." }),
  zipCode: z.string()
    .regex(zipCodePattern, "Informe um CEP válido")
    .min(8, { message: "O Cep é obrigatório.", }),
  cardNumber: z.string()
    .regex(cardNumberPattern, "O numero do cartão deve contem mais que 16 dígitos")
    .min(15, { message: "O numero do cartão é obrigatório.", }),
  cardExpirationDate: z.string()
    .regex(cardExpirationDatePattern, "Invalid expiration date format (MM/YY)")
    .min(4, { message: "A data de validade é obrigatória.", }),
  cardCvv: z.string()
    .regex(cardCvvPattern, "Invalid CVV format")
    .min(3, { message: "O CVV é obrigatório.", })
});