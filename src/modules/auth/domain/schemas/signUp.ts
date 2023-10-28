import { z } from 'zod';

import EUserCategory from '@/shared/domain/enums/EUserCategory';
import EUserGender from '@/shared/domain/enums/EUserGender';

import { validatePassword } from '@/shared/utils/Password';
import { formatPhone, validatePhone } from '@/shared/utils/Phone';

export const signUpSchema = z
  .object({
    name: z.string().nonempty('Campo obrigatório!'),
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
    category: z.nativeEnum(EUserCategory, {
      errorMap: ({ code }) => {
        if (code === 'invalid_enum_value')
          return { message: 'Valor inválido!' };

        return {
          message: 'Campo obrigatório!',
        };
      },
    }),
    gender: z.nativeEnum(EUserGender, {
      errorMap: ({ code }) => {
        if (code === 'invalid_enum_value')
          return { message: 'Valor inválido!' };

        return {
          message: 'Campo obrigatório!',
        };
      },
    }),
    phone: z
      .string()
      .optional()
      .transform((val) => (val ? formatPhone(val) : val))
      .refine((val) => !val || validatePhone(val), 'Telefone inválido!'),
    biography: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
  })
  .refine(
    ({ category, phone }) => {
      if (category === EUserCategory.TEACHER && !phone) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['phone'],
    }
  )
  .refine(
    ({ category, biography }) => {
      if (category === EUserCategory.TEACHER && !biography) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['biography'],
    }
  )
  .refine(
    ({ category, state }) => {
      if (category === EUserCategory.TEACHER && !state) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['state'],
    }
  )
  .refine(
    ({ category, city }) => {
      if (category === EUserCategory.TEACHER && !city) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['city'],
    }
  );

export type signUpData = z.infer<typeof signUpSchema>;
