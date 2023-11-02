import ESubject from '@/shared/domain/enums/ESubject';

export default interface IBookingListFilter {
  state?: string;
  city?: string;
  subject?: ESubject;
  search?: string;
}
