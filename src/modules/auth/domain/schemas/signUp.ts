import { z } from 'zod';
import { formatPhone, validatePhone } from '@/shared/utils/Phone';

export const signUpSchema = z.object({
  corporateName: z.string().nonempty('Campo obrigatório!'),
  name: z.string().nonempty('Campo obrigatório!'),
  stateRegistration: z.string().optional(),
  phone: z
    .string()
    .nonempty('Campo obrigatório')
    .transform(formatPhone)
    .refine(validatePhone, 'Telefone inválido!'),
  email: z
    .string()
    .nonempty('Campo obrigatório!')
    .email('E-mail inválido!')
    .max(100, 'E-mail muito longo!')
    .toLowerCase()
    .trim(),
  postcode: z.string().nonempty('Campo obrigatório!').trim(),
  state: z.string().nonempty('Campo obrigatório!'),
  city: z.string().nonempty('Campo obrigatório!'),
  cityIbgeCode: z.string().optional(),
  neighborhood: z.string().nonempty('Campo obrigatório!'),
  number: z.string().nonempty('Campo obrigatório!'),
  street: z.string().nonempty('Campo obrigatório!'),
  reference: z.string(),
});

export type signUpData = z.infer<typeof signUpSchema>;
