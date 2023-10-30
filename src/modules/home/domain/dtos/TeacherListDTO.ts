import IPaginationRequest from '@/shared/domain/interfaces/IPaginationRequest';
import TeacherListFilterDTO from './TeacherListFilterDTO';

export default interface TeacherListDTO {
  filter: TeacherListFilterDTO;
  pagination: IPaginationRequest;
}
