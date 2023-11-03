import React, { useState } from 'react';

import Page from '@/core/Layout/components/Page';
import PageCard from '@/core/Layout/components/Page/Card';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

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
        <MessageList messages={messages} name={name} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </PageCard>
    </Page>
  );
}
