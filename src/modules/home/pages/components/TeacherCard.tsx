import { useEffect, useState } from 'react';

import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';

import Teacher from '@/shared/domain/entities/Teacher';

import { ESubjectTranslate } from '@/shared/domain/enums/ESubject';
import EUserGender from '@/shared/domain/enums/EUserGender';

import { formatCurrency } from '@/shared/utils/Currency';

import Avatar from '../../components/Avatar';

import FavoriteTeacherRepository from '../../../favorites/repositories/FavoriteTeacherRepository';

import useAuth from '@/modules/auth/hooks/useAuth';

import FavoriteTeacherDTO from '../../domain/dtos/FavoriteTeacherDTO';

import { toast } from 'react-toastify';

import { formatErrorForNotification } from '@/shared/utils/Error';

interface Props {
  teacher: Teacher;
}

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

export default function TeacherCard({ teacher }: Props) {
  const { user: studentUser } = useAuth();

  const repository = new FavoriteTeacherRepository();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { user, biography, schedules, city, state } = teacher;
  const { subject, inPersonClass, onlineClass, cost } = schedules[0];

  function handleContact() {
    const searchParams = new URLSearchParams({
      phone: teacher.phone,
      text: 'Olá, vi seu perfil no Mathesis e gostaria de marcar uma aula particular!',
    }).toString();

    const whatsAppUrl = `https://api.whatsapp.com/send?${searchParams}`;
    window.open(whatsAppUrl, '_blank');
  }

  async function checkFavoriteStatus() {
    setLoading(true);

    try {
      if (studentUser) {
        const isAlreadyFavorite = await repository.isFavorite({
          studentId: studentUser.student.id,
          teacherId: teacher.id,
        });

        setIsFavorite(isAlreadyFavorite);
      }
    } catch (error) {
      toast.error(formatErrorForNotification(error));
    } finally {
      setLoading(false);
    }
  }

  async function handleFavoriteTeacher() {
    setLoading(true);

    try {
      if (studentUser) {
        if (isFavorite) {
          setIsFavorite(false);

          return await repository.unfavorite({
            studentId: studentUser.student.id,
            teacherId: teacher.id,
          });
        }

        const body: FavoriteTeacherDTO = {
          studentId: studentUser.student.id,
          teacherId: teacher.id,
        };

        setIsFavorite(true);
        await repository.favorite(body);
      }
    } catch (error) {
      toast.error(formatErrorForNotification(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user && !selectedAvatar) {
      setSelectedAvatar(
        avatars[user.gender][
          Math.floor(Math.random() * avatars[user.gender].length)
        ]
      );
    }

    checkFavoriteStatus();
  }, [user, selectedAvatar]);

  return (
    <Box
      sx={{
        gap: 1,
        height: 500,
        width: 300,
        padding: 2,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',

        borderRadius: 5,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Avatar gender={user?.gender} selectedAvatar={selectedAvatar} />
      <Typography variant="h6">{user?.name}</Typography>
      <Typography
        sx={{
          maxHeight: '100px',
          overflowY: 'auto',
          padding: '8px',
        }}
      >
        {biography}
      </Typography>
      <Typography sx={{ fontWeight: 'bold' }}>
        {ESubjectTranslate[subject]}
      </Typography>

      <Stack sx={{ flexDirection: 'row', gap: 2 }}>
        {inPersonClass && (
          <Typography sx={{ fontWeight: 'bold' }}>Aula Presencial</Typography>
        )}

        {onlineClass && (
          <Typography sx={{ fontWeight: 'bold' }}>Aula On-line</Typography>
        )}
      </Stack>

      <Typography sx={{ fontWeight: 'bold' }}>
        {formatCurrency(cost)}
      </Typography>

      {inPersonClass && (
        <Typography>
          {city}, {state}
        </Typography>
      )}

      <Stack sx={{ flexDirection: 'row', gap: 2 }}>
        <Button onClick={handleContact} variant="contained">
          Entrar em contato
        </Button>

        <Button onClick={handleFavoriteTeacher}>
          {loading ? (
            <CircularProgress size={24} />
          ) : isFavorite ? (
            <Favorite />
          ) : (
            <FavoriteBorder />
          )}
        </Button>
      </Stack>
    </Box>
  );
}
