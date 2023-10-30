import Repository from '@/core/Http/Repository';

import { isArray } from '@/shared/utils/Array';

import IPaginationResponse from '@/shared/domain/interfaces/IPaginationResponse';
import TeacherListDTO from '../domain/dtos/TeacherListDTO';
import Teacher from '@/shared/domain/entities/Teacher';

export default class TeacherRepository extends Repository {
  constructor() {
    super('/teachers');
  }

  public async list(
    params: TeacherListDTO
  ): Promise<IPaginationResponse<Teacher>> {
    const { status, data } = await this.http.get('/', {
      params: {
        ...params.filter,
        ...params.pagination,
      },
    });

    if (this.isOK(status)) {
      const { meta, data: values } = data;

      return {
        pages: meta?.pageCount ?? 1,
        total: meta?.total ?? 0,
        data: isArray(values)
          ? values.map(Teacher.make)
          : ([] as Array<Teacher>),
      };
    }

    throw new Error('Ops, algo inesperado aconteceu!');
  }
}
