import User from '@/modules/user/domain/entities/User';
import EAuthAction from '../enums/EAuthAction';

export default interface IAuthAction {
  type: EAuthAction;
  user?: User;
}
