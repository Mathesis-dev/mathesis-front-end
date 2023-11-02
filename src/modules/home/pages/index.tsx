import { useEffect, useState } from 'react';
import useSWR from 'swr';

import {
  Box,
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import Page from '@/core/Layout/components/Page';
import PageCard from '@/core/Layout/components/Page/Card';
import PageHeader from '@/core/Layout/components/Page/Header';
import PageTitle from '@/core/Layout/components/Page/Title';

import HomeListFilter from './components/Filter';
import TeacherCard from './components/TeacherCard';
import Avatar from '../components/Avatar';

import EUserGender from '@/shared/domain/enums/EUserGender';
import TeacherListDTO from '../domain/dtos/TeacherListDTO';
import TeacherListFilterDTO from '../domain/dtos/TeacherListFilterDTO';

import useAuth from '@/modules/auth/hooks/useAuth';

import { isMobile } from '@/shared/utils/Mobile';
import { capitalizeString } from '@/shared/utils/String';

import TeacherRepository from '../repositories/TeacherRepository';

const avatars = {
  [EUserGender.MALE]: [
    '../../../../public/icons/male-avatar1.svg',
    '../../../../public/icons/male-avatar2.svg',
  ],
  [EUserGender.FEMALE]: [
    '../../../../public/icons/female-avatar1.svg',
    '../../../../public/icons/female-avatar2.svg',
  ],
};

export default function Home() {
  const { user } = useAuth();
  const mobile = isMobile();

  const repository = new TeacherRepository();

  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [params, setParams] = useState<TeacherListDTO>({
    filter: {},
    pagination: {
      orderBy: 'updatedAt',
      ordering: 'desc',
      take: 10,
      page: 1,
    },
  });

  const { data, isLoading } = useSWR(['teachers', params], ([url, value]) =>
    repository.list(value)
  );

  const teachers = data?.data;

  function handleFilter(filter: TeacherListFilterDTO) {
    setParams((prev) => ({
      filter: {
        ...prev.filter,
        ...filter,
      },
      pagination: {
        ...prev.pagination,
        page: 1,
      },
    }));
  }

  useEffect(() => {
    if (user && !selectedAvatar) {
      setSelectedAvatar(
        avatars[user.gender][
          Math.floor(Math.random() * avatars[user.gender].length)
        ]
      );
    }
  }, [user, selectedAvatar]);

  return (
    <Page>
      <PageHeader>
        {selectedAvatar ? (
          <Avatar gender={user?.gender} selectedAvatar={selectedAvatar} />
        ) : (
          <CircularProgress size="50px" />
        )}

        <Stack>
          <PageTitle
            title={`Olá ${capitalizeString(
              user?.name ?? ''
            )}, que bom ver você!`}
          />

          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Que tal buscar um professor?
          </Typography>
        </Stack>

        <HomeListFilter onFilter={handleFilter} />
      </PageHeader>

      <PageCard
        sx={{
          display: 'flex',
          alignItems: mobile ? 'center' : 'start',
          justifyContent: mobile ? 'center' : 'start',
        }}
      >
        {isLoading && <LinearProgress sx={{ width: '100%' }} />}

        {!isLoading && !teachers && (
          <Typography sx={{ textAlign: 'center' }}>
            Nenhum professor encontrado
          </Typography>
        )}

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: mobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {teachers?.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </Box>
      </PageCard>
    </Page>
  );
}
