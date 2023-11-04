import { useNavigate } from 'react-router-dom';
import { Alert, Box } from '@mui/material';

import Message from './Message';

import EAuthenticatedPath from '@/core/Router/enums/EAuthenticatedPath';

interface Props {
  messages: Array<{ user: string; text: string }>;
  name: string;
}

export default function MessageList({ messages, name }: Props) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        padding: '0 10px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Alert
        severity="info"
        sx={{ marginBottom: '10px', cursor: 'pointer' }}
        onClick={() => navigate(`/${EAuthenticatedPath.HOME}`)}
      >
        Essa é uma inteligência artificial e nem sempre irá lhe responder de
        maneira 100% correta. Lembre-se sempre de buscar por referências para
        aperfeiçoar as respostas vistas aqui. Caso você continue com dúvidas,
        experimente buscar por um professor que possa lhe ofertar uma aula
        particular. Clique aqui!
      </Alert>
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
    </Box>
  );
}
