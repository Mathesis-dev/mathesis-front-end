import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { Fab, Link } from '@mui/material';
import { isMobile } from '../../utils/Mobile';

export default function WhatsAppButton() {
  const mobile = isMobile();

  const gap = mobile ? '24px' : '48px';

  // TODO - Passar dinamicamente o número de telefone do professor
  const searchParams = new URLSearchParams({
    phone: import.meta.env.VITE_WHATSAPP,
    text: 'Olá, vi seu perfil no Mathesis e gostaria de marcar uma aula particular!',
  }).toString();

  const whatsAppUrl = `https://api.whatsapp.com/send?${searchParams}`;

  return (
    <Fab
      sx={{
        position: 'absolute',
        bottom: gap,
        right: gap,
      }}
      color="success"
      LinkComponent={Link}
      href={whatsAppUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon fontSize="large" />
    </Fab>
  );
}
