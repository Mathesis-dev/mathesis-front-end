import EUserCategory from "../enums/EUserCategory";
import EUserGender from "../enums/EUserGender";
import Student from "./Student";
import Teacher from "./Teacher";

export default class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public category: EUserCategory,
    public gender: EUserGender,

    public entity: Teacher | Student,
   
    public createdAt: string,
    public updatedAt: string,
    public deletedAt?: string,

  ) {}

  static make(data: any): User {
    const entity = data.student ? Student.make(data.student) : Teacher.make(data.teacher);

    return new User(
      data.id ?? 0,
      data.name ?? '',
      data.email ?? '',
      data.category,
      data.gender,

      entity,

      data.createdAt ?? '',
      data.updatedAt ?? '',
      data.deletedAt,
    );
  }
}
