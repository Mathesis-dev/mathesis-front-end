import React from 'react';

import SendIcon from '@mui/icons-material/Send';
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (event: React.MouseEvent | React.KeyboardEvent) => void;
  loading: boolean;
}

export default function ChatInput({
  message,
  setMessage,
  sendMessage,
  loading,
}: Props) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={sendMessage} disabled={loading}>
              {loading ? <CircularProgress /> : <SendIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      placeholder="Digite sua mensagem..."
    />
  );
}
