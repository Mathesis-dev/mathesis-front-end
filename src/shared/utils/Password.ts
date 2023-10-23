import { z } from 'zod';

export function validatePassword(password: string): boolean {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-+]).{8,}$/;
  return regex.test(password);
}

export const zodPasswordValidator = z
  .string()
  .nonempty('Campo obrigatório!')
  .trim()
  .min(8, 'A senha deve conter no mínimo 8 caracteres.')
  .refine(
    (password) => /.*\d.*\d.*/.test(password),
    'A senha deve conter pelo menos dois números.'
  )
  .refine(
    (password) => /[a-z]/.test(password),
    'A senha deve conter pelo menos uma letra minúscula.'
  )
  .refine(
    (password) => /[A-Z]/.test(password),
    'A senha deve conter pelo menos uma letra maiúscula.'
  )
  .refine(
    (password) => /[!@#$%^&()_+.]/.test(password),
    'A senha deve conter pelo menos um caractere especial.'
  );
