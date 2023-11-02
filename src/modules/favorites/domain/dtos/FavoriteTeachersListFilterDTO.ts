import ESubject from '@/shared/domain/enums/ESubject';

export default interface FavoriteTeachersListFilterDTO {
  state?: string;
  city?: string;
  subject?: ESubject;
  search?: string;
  studentId?: number;
}
