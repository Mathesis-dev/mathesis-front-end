import { z } from 'zod';
import { validatePassword } from '@/shared/utils/Password';

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty('Campo obrigatório!')
    .email('E-mail inválido!')
    .max(100, 'E-mail muito longo!')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .nonempty('Campo obrigatório!')
    .min(8, 'Senha de no mínimo 8 caracteres.')
    .trim()
    .refine(validatePassword, 'Senha inválida!'),
});

export type loginData = z.infer<typeof loginSchema>;
