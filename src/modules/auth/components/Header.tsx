import { Stack, Typography } from '@mui/material';

interface Props {
  title: string;
  description?: string;
}

export default function UnauthenticatedHeader({ title, description }: Props) {
  return (
    <Stack width="100%" gap={1}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight="700"
        fontSize="2rem"
        color="text.primary"
      >
        {title}
      </Typography>

      {description && (
        <Typography variant="body1" component="p" color="text.secondary">
          {description}
        </Typography>
      )}
    </Stack>
  );
}
