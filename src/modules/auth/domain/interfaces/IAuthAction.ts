import User from '@/shared/domain/entities/User';
import EAuthAction from '../enums/EAuthAction';

export default interface IAuthAction {
  type: EAuthAction;
  user?: User;
}
