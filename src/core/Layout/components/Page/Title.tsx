import EAuthenticatedPath from '@/core/Router/enums/EAuthenticatedPath';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  goBackPath?: EAuthenticatedPath | string;
  goBackPathSecondary?: string;
}

export default function PageTitle({
  title,
  goBackPath,
  goBackPathSecondary,
}: Props) {
  const navigate = useNavigate();

  const mobile: boolean = useMediaQuery((theme: any) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Stack
      flexGrow={mobile ? '1' : undefined}
      flexDirection="row"
      alignItems="center"
      gap={1}
    >
      {goBackPath && (
        <IconButton
          component="span"
          onClick={() =>
            navigate(`/${goBackPath}/${goBackPathSecondary ?? ''}`)
          }
        >
          <ArrowBackIosNewOutlined color="secondary" />
        </IconButton>
      )}

      <Typography component="h2" variant="h5" fontWeight="bold" flexGrow="1">
        {title}
      </Typography>
    </Stack>
  );
}
