import { useEffect, useState } from 'react';
import useSWR from 'swr';

import {
  Avatar,
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

import EUserGender from '@/shared/domain/enums/EUserGender';
import TeacherListDTO from '../domain/dtos/TeacherListDTO';
import TeacherListFilterDTO from '../domain/dtos/TeacherListFilterDTO';

import useAuth from '@/modules/auth/hooks/useAuth';

import { capitalizeString } from '@/shared/utils/String';

import TeacherRepository from '../repositories/TeacherRepository';

const maleAvatars = [
  '../../../../public/icons/male-avatar1.svg',
  '../../../../public/icons/male-avatar2.svg',
];

const femaleAvatars = [
  '../../../../public/icons/female-avatar1.svg',
  '../../../../public/icons/female-avatar2.svg',
];

export default function Home() {
  const { user } = useAuth();

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

  function randomAvatar(avatars: Array<string>) {
    return avatars[Math.floor(Math.random() * avatars.length)];
  }

  useEffect(() => {
    if (!selectedAvatar) {
      const avatars =
        user?.gender === EUserGender.MALE ? maleAvatars : femaleAvatars;
      setSelectedAvatar(randomAvatar(avatars));
    }
  }, [user, selectedAvatar]);

  return (
    <Page>
      <PageHeader>
        {selectedAvatar ? (
          <Avatar
            src={selectedAvatar}
            alt={`${
              user?.gender === EUserGender.MALE ? 'Male' : 'Female'
            } Avatar`}
            sx={{ width: '8rem', height: '8rem', marginRight: 2 }}
          />
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

      <PageCard>
        {isLoading && <LinearProgress sx={{ width: '100%' }} />}

        {!isLoading && !teachers && (
          <Typography sx={{ textAlign: 'center' }}>
            Nenhum professor encontrado
          </Typography>
        )}

        <Box sx={{ display: 'flex', gap: 2 }}>
          {teachers?.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </Box>
      </PageCard>
    </Page>
  );
}
