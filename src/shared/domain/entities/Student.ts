import { isArray } from '@/shared/utils/Array';
import FavoriteTeachers from './FavoriteTeachers';
import User from './User';

export default class Student {
  constructor(
    public id: number,
    public userId: number,
    public favoriteTeachers: Array<FavoriteTeachers>,
    public createdAt: string,
    public updatedAt: string,
    public deletedAt?: string
  ) {}

  static make(data: any): Student {
    const favoriteTeachers = isArray(data.favoriteTeachers)
      ? data.favoriteTeachers.map(FavoriteTeachers.make)
      : ([] as Array<FavoriteTeachers>);

    return new Student(
      data.id ?? 0,
      data.userId ?? '',

      favoriteTeachers,

      data.createdAt ?? '',
      data.updatedAt ?? '',
      data.deletedAt
    );
  }
}
