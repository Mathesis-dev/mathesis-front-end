import { Box } from '@mui/material';
import background from '@shared/assets/react.svg';

export default function UnauthenticatedBackground() {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: '-1',
        width: '100%',
        height: '100%',
        maxHeight: '80vh',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundImage: `url(${background})`,
      }}
    />
  );
}
