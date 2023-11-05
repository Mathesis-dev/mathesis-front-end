import { useEffect, useState } from 'react';
import useSWR from 'swr';

import {
  Box,
  CircularProgress,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import Page from '@/core/Layout/components/Page';
import PageCard from '@/core/Layout/components/Page/Card';
import PageHeader from '@/core/Layout/components/Page/Header';
import PageTitle from '@/core/Layout/components/Page/Title';
import Avatar from '@/shared/components/Avatar';
import Pagination from '@/shared/components/Pagination';
import TeacherCard from '@/shared/components/TeacherCard';

import HomeListFilter from './components/Filter';

import EUserGender from '@/shared/domain/enums/EUserGender';
import TeacherListDTO from '../domain/dtos/TeacherListDTO';
import TeacherListFilterDTO from '../domain/dtos/TeacherListFilterDTO';

import useAuth from '@/modules/auth/hooks/useAuth';

import { isMobile } from '@/shared/utils/Mobile';
import { capitalizeString } from '@/shared/utils/String';

import IPaginationRequest from '@/shared/domain/interfaces/IPaginationRequest';

import TeacherRepository from '../repositories/TeacherRepository';

const avatars = {
  [EUserGender.MALE]: ['/icons/male-avatar1.svg', '/icons/male-avatar2.svg'],
  [EUserGender.FEMALE]: [
    '/icons/female-avatar1.svg',
    '/icons/female-avatar2.svg',
  ],
};

export default function Home() {
  const { user } = useAuth();
  const mobile = isMobile();

  const repository = new TeacherRepository();

  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(1);
  const [params, setParams] = useState<TeacherListDTO>({
    filter: {},
    pagination: {
      orderBy: 'updatedAt',
      ordering: 'desc',
      take: 30,
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

  function handleOnChangePagination(
    pagination: Omit<IPaginationRequest, 'orderBy' | 'ordering'>
  ) {
    setParams((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        ...pagination,
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

  useEffect(() => {
    if (teachers) {
      setTotal(teachers.length);
    }
  }, [teachers]);

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

        {!isLoading && !teachers?.length && (
          <Typography sx={{ textAlign: 'center', width: '100%' }}>
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
            flexWrap: 'wrap',
          }}
        >
          {teachers?.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </Box>

        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Pagination
            onChange={handleOnChangePagination}
            total={total}
            page={params.pagination.page}
          />
        </Grid>
      </PageCard>
    </Page>
  );
}
