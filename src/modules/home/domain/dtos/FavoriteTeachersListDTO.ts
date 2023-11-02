import IPaginationRequest from '@/shared/domain/interfaces/IPaginationRequest';
import FavoriteTeachersListFilterDTO from './FavoriteTeachersListFilterDTO';

export default interface FavoriteTeachersListDTO {
  filter: FavoriteTeachersListFilterDTO;
  pagination: IPaginationRequest;
}
