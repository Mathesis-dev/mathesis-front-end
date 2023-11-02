import Repository from '@/core/Http/Repository';

import { isArray } from '@/shared/utils/Array';

import IPaginationResponse from '@/shared/domain/interfaces/IPaginationResponse';

import FavoriteTeachers from '@/shared/domain/entities/FavoriteTeachers';
import FavoriteTeachersListDTO from '../domain/dtos/FavoriteTeachersListDTO';
import FavoriteTeacherDTO from '../domain/dtos/FavoriteTeacherDTO';

export default class FavoriteTeacherRepository extends Repository {
  constructor() {
    super('/favorite-teachers');
  }

  public async list(
    params: FavoriteTeachersListDTO
  ): Promise<IPaginationResponse<FavoriteTeachers>> {
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
          ? values.map(FavoriteTeachers.make)
          : ([] as Array<FavoriteTeachers>),
      };
    }

    throw new Error('Ops, algo inesperado aconteceu!');
  }

  public async isFavorite(body: FavoriteTeacherDTO): Promise<boolean> {
    const { status, data } = await this.http.get(`/is-favorite`, {
      params: {
        ...body,
      },
    });

    if (this.isOK(status)) return data;

    throw new Error('Ops, algo inesperado aconteceu!');
  }

  public async favorite(record: FavoriteTeacherDTO): Promise<FavoriteTeachers> {
    const { status, data } = await this.http.post('/', record);

    if (this.isOK(status)) return FavoriteTeachers.make(data);

    throw new Error('Ops, algo inesperado aconteceu!');
  }

  public async unfavorite(body: FavoriteTeacherDTO): Promise<void> {
    const { status } = await this.http.delete(`/`, {
      params: {
        ...body,
      },
    });

    if (this.isOK(status)) return;

    throw new Error('Ops, algo inesperado aconteceu!');
  }
}
