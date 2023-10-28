import { z } from 'zod';

import EUserCategory from '@/shared/domain/enums/EUserCategory';
import EUserGender from '@/shared/domain/enums/EUserGender';
import ESubject from '@/shared/domain/enums/ESubject';

import { validatePassword } from '@/shared/utils/Password';
import { formatPhone, validatePhone } from '@/shared/utils/Phone';

const schedulesSchema = z.object({
  subject: z.nativeEnum(ESubject, {
    errorMap: ({ code }) => {
      if (code === 'invalid_enum_value') return { message: 'Valor inválido!' };

      return {
        message: 'Campo obrigatório!',
      };
    },
  }),
  cost: z.string().nonempty('Campo obrigatório!'),
  onlineClass: z.boolean(),
  inPersonClass: z.boolean(),
});

const teacherSchema = z.object({
  phone: z
    .string()
    .nonempty('Campo obrigatório')
    .transform(formatPhone)
    .refine(validatePhone, 'Telefone inválido!'),
  biography: z.string().nonempty('Campo obrigatório!'),
  state: z.string().nonempty('Campo obrigatório!'),
  city: z.string().nonempty('Campo obrigatório!'),
  schedules: schedulesSchema,
});

export const signUpSchema = z.object({
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
      if (code === 'invalid_enum_value') return { message: 'Valor inválido!' };

      return {
        message: 'Campo obrigatório!',
      };
    },
  }),
  gender: z.nativeEnum(EUserGender, {
    errorMap: ({ code }) => {
      if (code === 'invalid_enum_value') return { message: 'Valor inválido!' };

      return {
        message: 'Campo obrigatório!',
      };
    },
  }),
  teacher: teacherSchema.optional(),
});

export type signUpData = z.infer<typeof signUpSchema>;
