import { Box, Typography } from '@mui/material';

interface Props {
  message: { user: string; text: string };
  name: string;
}

export default function Message({ message: { user, text }, name }: Props) {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <Box
      sx={{
        alignSelf: 'flex-end',
        backgroundColor: 'primary.dark',
        color: 'white.main',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px',
        maxWidth: '60%',
      }}
    >
      <Typography>{text}</Typography>
    </Box>
  ) : (
    <Box
      sx={{
        alignSelf: 'flex-start',
        backgroundColor: 'primary.main',
        color: 'white.main',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px',
        maxWidth: '60%',
      }}
    >
      <Typography>
        <strong>{user}: </strong>
        {text}
      </Typography>
    </Box>
  );
}
