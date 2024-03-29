import EUserCategory from '@/shared/domain/enums/EUserCategory';
import EUserGender from '@/shared/domain/enums/EUserGender';

export default interface SignUpDTO {
  name: string;
  email: string;
  password: string;
  category: EUserCategory;
  gender: EUserGender;
  teacher?: {
    biography?: string;
    phone?: string;
    state?: string;
    city?: string;
    schedules?: Array<{
      subject?: string;
      cost?: number;
      onlineClass?: boolean;
      inPersonClass?: boolean;
    }>;
  };
}
