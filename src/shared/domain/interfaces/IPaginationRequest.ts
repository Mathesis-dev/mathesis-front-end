import { Sort } from '../types/Sort';

export default interface IPaginationRequest {
  take?: number;
  page?: number;
  orderBy?: string;
  ordering?: Sort;
}
