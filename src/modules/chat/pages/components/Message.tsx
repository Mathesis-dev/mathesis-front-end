import { Box, Typography } from '@mui/material';

interface Props {
  message: { user: string; text: string };
  name: string;
}

export default function Message({ message: { user, text }, name }: Props) {
  const isSentByCurrentUser =
    user.toLowerCase().trim() === name.toLowerCase().trim();

  return (
    <Box
      sx={{
        color: 'white.main',
        alignSelf: isSentByCurrentUser ? 'flex-end' : 'flex-start',
        backgroundColor: isSentByCurrentUser ? 'primary.main' : 'primary.dark',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px',
        maxWidth: '60%',
      }}
    >
      <Typography>
        {!isSentByCurrentUser && <strong>{user}: </strong>}
        {text}
      </Typography>
    </Box>
  );
}
