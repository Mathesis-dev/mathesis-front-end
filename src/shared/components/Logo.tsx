import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  isSidebarOpen?: boolean;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export default function Logo({ isSidebarOpen, width, height, color }: Props) {
  const widthNotNullable = width ?? '192';
  const heightNotNullable = height ?? '34';
  const colorNotNullable = color ?? '#000000';
  const navigate = useNavigate();

  return (
    <Typography
      sx={{
        color: colorNotNullable,
        cursor: 'pointer',
        width: widthNotNullable,
        height: heightNotNullable,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: isSidebarOpen ? '1.5rem' : '1rem',
      }}
      onClick={() => navigate(`/home`)}
    >
      {isSidebarOpen ? 'Mathesis' : 'Math'}
    </Typography>
  );
}
