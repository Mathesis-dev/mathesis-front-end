import EUserCategory from '../enums/EUserCategory';
import EUserGender from '../enums/EUserGender';
import Student from './Student';
import Teacher from './Teacher';

export default class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public category: EUserCategory,
    public gender: EUserGender,

    public teacher: Teacher,
    public student: Student,

    public createdAt: string,
    public updatedAt: string,
    public deletedAt?: string
  ) {}

  static make(data: any): User {
    const student = Student.make(data.student ?? {});
    const teacher = Teacher.make(data.teacher ?? {});

    return new User(
      data.id ?? 0,
      data.name ?? '',
      data.email ?? '',
      data.category,
      data.gender,

      teacher,
      student,

      data.createdAt ?? '',
      data.updatedAt ?? '',
      data.deletedAt
    );
  }
}
