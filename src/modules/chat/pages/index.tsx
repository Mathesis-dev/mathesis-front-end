import React, { useState } from 'react';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';

import Page from '@/core/Layout/components/Page';
import PageCard from '@/core/Layout/components/Page/Card';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

import ChatRepository from '../repositories/ChatRepository';

export default function Chat() {
  const isProduction = import.meta.env.VITE_ENVIRONMENT;

  const repository = new ChatRepository();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<
    Array<{ user: string; text: string }>
  >([]);
  const [name, setName] = useState<string>('Você');

  async function sendMessage(event: React.MouseEvent | React.KeyboardEvent) {
    setLoading(true);

    try {
      event.preventDefault();

      if (message) {
        setMessages([...messages, { user: name, text: message }]);
        setMessage('');

        if (isProduction) {
          const response = await repository.sendMessage(message);

          const botMessage = { user: 'MathesisIA', text: response };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        } else {
          toast.warn('Chatbot indisponível no ambiente de desenvolvimento.');
        }
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  }

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
            loading={loading}
          />
        </Box>
      </PageCard>
    </Page>
  );
}
