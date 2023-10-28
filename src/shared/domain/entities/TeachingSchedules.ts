import ESubject from "../enums/ESubject";
import Teacher from "./Teacher";

export default class TeachingSchedules {
    constructor(
      public id: number,
      public subject: ESubject,
      public cost: number,

      public teacherId: number,
      public teacher: Teacher,

      public onlineClass: boolean, 
      public inPersonClass: boolean, 
     
      public createdAt: string,
      public updatedAt: string,
      public deletedAt?: string,
  
    ) {}
  
    static make(data: any): TeachingSchedules {
      const teacher = Teacher.make(data.teacher ?? undefined);
  
      return new TeachingSchedules(
        data.id ?? 0,
        data.subject ?? '',
        data.cost ?? '',

        data.teacherId ?? 0,
        teacher,

        data.onlineClass ?? true, 
        data.inPersonClass ?? true, 
  
        data.createdAt ?? '',
        data.updatedAt ?? '',
        data.deletedAt,
      );
    }
  }
  