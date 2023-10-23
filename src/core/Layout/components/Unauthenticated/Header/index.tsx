import { ReactNode } from 'react';
import { Container, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

import Logo from '@/shared/components/Logo';

import UnauthenticatedHeaderButton from './Button';
import UnauthenticatedHeaderLink from './Link';

interface ILink {
  icon: ReactNode;
  url?: string;
}

const { VITE_FACEBOOK, VITE_LINKEDIN, VITE_YOUTUBE, VITE_INSTAGRAM } =
  import.meta.env;

export default function UnauthenticatedHeader() {
  const links: Array<ILink> = [
    {
      icon: <Facebook />,
      url: VITE_FACEBOOK,
    },
    {
      icon: <LinkedIn />,
      url: VITE_LINKEDIN,
    },
    {
      icon: <YouTube />,
      url: VITE_YOUTUBE,
    },
    {
      icon: <Instagram />,
      url: VITE_INSTAGRAM,
    },
  ];

  return (
    <Container component="header">
      <Stack
        justifyContent="space-evenly"
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        paddingY={3}
        gap={3}
        component="nav"
      >
        <Logo color="#FAFAFA" />

        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          gap={2}
        >
          {links.map(
            ({ icon, url }, index) =>
              url && (
                <UnauthenticatedHeaderLink key={index} icon={icon} url={url} />
              )
          )}
        </Stack>

        <UnauthenticatedHeaderButton />
      </Stack>
    </Container>
  );
}
