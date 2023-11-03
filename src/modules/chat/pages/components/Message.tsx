import { Typography } from '@mui/material';

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
    <Typography align="right">{text}</Typography>
  ) : (
    <Typography align="left">
      <strong>{user}: </strong>
      {text}
    </Typography>
  );
}
