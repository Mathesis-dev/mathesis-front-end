import ESubject from '@/shared/domain/enums/ESubject';

export default interface ITeacherListFilter {
  state?: string;
  city?: string;
  subject?: ESubject;
  search?: string;
}
