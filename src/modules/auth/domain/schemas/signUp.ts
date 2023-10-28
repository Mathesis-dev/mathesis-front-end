import { z } from 'zod';

import EUserCategory from '@/shared/domain/enums/EUserCategory';
import EUserGender from '@/shared/domain/enums/EUserGender';
import ESubject from '@/shared/domain/enums/ESubject';

import { validatePassword } from '@/shared/utils/Password';
import { formatPhone, validatePhone } from '@/shared/utils/Phone';

const schedulesSchema = z.object({
  subject: z.optional(
    z.nativeEnum(ESubject, {
      errorMap: ({ code }) => {
        if (code === 'invalid_enum_value')
          return { message: 'Valor inválido!' };

        return {
          message: 'Campo obrigatório!',
        };
      },
    })
  ),
  cost: z.string().optional(),
  onlineClass: z.boolean(),
  inPersonClass: z.boolean(),
});

const teacherSchema = z.object({
  phone: z
    .string()
    .optional()
    .transform((val) => (val ? formatPhone(val) : val))
    .refine((val) => !val || validatePhone(val), 'Telefone inválido!'),
  biography: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  schedules: schedulesSchema,
});

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
    teacher: teacherSchema.optional(),
  })
  .refine(
    ({ category, teacher }) => {
      if (category === EUserCategory.TEACHER && !teacher?.phone) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['teacher.phone'],
    }
  )
  .refine(
    ({ category, teacher }) => {
      if (category === EUserCategory.TEACHER && !teacher?.biography) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['teacher.biography'],
    }
  )
  .refine(
    ({ category, teacher }) => {
      if (category === EUserCategory.TEACHER && !teacher?.state) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['teacher.state'],
    }
  )
  .refine(
    ({ category, teacher }) => {
      if (category === EUserCategory.TEACHER && !teacher?.city) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['teacher.city'],
    }
  )
  .refine(
    ({ category, teacher }) => {
      if (category === EUserCategory.TEACHER && !teacher?.schedules?.cost) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['teacher.schedules.cost'],
    }
  )
  .refine(
    ({ category, teacher }) => {
      if (category === EUserCategory.TEACHER && !teacher?.schedules?.subject) {
        return false;
      }
      return true;
    },
    {
      message: 'Campo obrigatório!',
      path: ['teacher.schedules.subject'],
    }
  );

export type signUpData = z.infer<typeof signUpSchema>;
