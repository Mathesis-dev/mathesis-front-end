import { isArray } from '@/shared/utils/Array';
import TeachingSchedules from './TeachingSchedules';
import User from './User';

export default class Teacher {
  constructor(
    public id: number,
    public phone: string,
    public biography: string,

    public schedules: Array<TeachingSchedules>,
    public userId: number,

    public city: string,
    public state: string,
    public badReviews: number,
    public mediumReviews: number,
    public goodReviews: number,

    public createdAt: string,
    public updatedAt: string,
    public deletedAt?: string
  ) {}

  static make(data: any): Teacher {
    const schedules = isArray(data.schedules)
      ? data.schedules.map(TeachingSchedules.make)
      : ([] as Array<TeachingSchedules>);

    return new Teacher(
      data.id ?? 0,
      data.phone ?? '',
      data.biography ?? '',

      schedules,

      data.userId ?? 0,

      data.city ?? '',
      data.state ?? '',
      data.badReviews ?? 0,
      data.mediumReviews ?? 0,
      data.goodReviews ?? 0,

      data.createdAt ?? '',
      data.updatedAt ?? '',
      data.deletedAt
    );
  }
}
