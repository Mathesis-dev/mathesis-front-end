import ESubject from '@/shared/domain/enums/ESubject';

export default interface TeacherListFilterDTO {
  state?: string;
  city?: string;
  subject?: ESubject;
  search?: string;
}
