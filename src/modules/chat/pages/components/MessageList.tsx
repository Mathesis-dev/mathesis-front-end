import { Box } from '@mui/material';

import Message from './Message';

interface Props {
  messages: Array<{ user: string; text: string }>;
  name: string;
}

export default function MessageList({ messages, name }: Props) {
  return (
    <Box>
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
    </Box>
  );
}
