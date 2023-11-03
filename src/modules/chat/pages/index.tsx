import React, { useState } from 'react';

import Page from '@/core/Layout/components/Page';
import PageCard from '@/core/Layout/components/Page/Card';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';
import { Box } from '@mui/material';

export default function Chat() {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<
    Array<{ user: string; text: string }>
  >([]);
  const [name, setName] = useState<string>('Usuário');

  const sendMessage = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.preventDefault();

    if (message) {
      setMessages([...messages, { user: name, text: message }]);
      setMessage('');
    }
  };

  return (
    <Page>
      <PageCard>
        <Box
          display="flex"
          flexDirection="column"
          height="calc(100vh - 160px)"
          width="100%"
        >
          <MessageList messages={messages} name={name} />
          <ChatInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Box>
      </PageCard>
    </Page>
  );
}
