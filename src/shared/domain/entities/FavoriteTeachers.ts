import Teacher from "./Teacher";

export default class FavoriteTeachers {
    constructor(
      public id: number,
      public teacherId: number,
      public teacher: Teacher, 
      public createdAt: string,
      public updatedAt: string,
      public deletedAt?: string,
  
    ) {}
  
    static make(data: any): FavoriteTeachers {
        const teacher = Teacher.make(data.teacher);
  
      return new FavoriteTeachers(
        data.id ?? 0,

        data.teacherId ?? 0,
        teacher,

        data.createdAt ?? '',
        data.updatedAt ?? '',
        data.deletedAt,
      );
    }
  }
  