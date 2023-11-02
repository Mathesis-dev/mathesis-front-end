import { Avatar as MUIAvatar, CircularProgress } from '@mui/material';

import EUserGender from '@/shared/domain/enums/EUserGender';

interface Props {
  gender: EUserGender | undefined;
  selectedAvatar: string | null;
}

export default function Avatar({ gender, selectedAvatar }: Props) {
  if (selectedAvatar && gender) {
    return (
      <MUIAvatar
        src={selectedAvatar}
        alt={`${
          gender === EUserGender.MALE ? 'Male' : 'Female'
        } Teacher Avatar`}
        sx={{ width: '8rem', height: '8rem', marginRight: 2 }}
      />
    );
  }

  return <CircularProgress size="50px" />;
}
