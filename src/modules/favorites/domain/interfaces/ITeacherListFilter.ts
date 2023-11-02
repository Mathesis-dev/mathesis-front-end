import ESubject from '@/shared/domain/enums/ESubject';

export default interface IFavoriteTeachersListFilter {
  state?: string;
  city?: string;
  subject?: ESubject;
  search?: string;
}
