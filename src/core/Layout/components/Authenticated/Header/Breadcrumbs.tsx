import { useLocation, useParams, Link as LinkRouter } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@mui/material';

import { isMobile } from '@/shared/utils/Mobile';

import toBreadcrumbs from '@/core/Router/mappers/toBreadcrumbs';
import routes from '@/core/Router/routes';

export default function AuthenticatedHeaderBreadcrumbs() {
  const { id } = useParams();

  const location = useLocation();
  const mobile = isMobile();

  const pathnames = location.pathname.split('/').reduce((prev, route) => {
    if (route) {
      prev.push(isNaN(route as any) ? route : ':id');
    }

    return prev;
  }, [] as Array<string>);

  const breadcrumbs = toBreadcrumbs(routes);

  if (mobile)
    return (
      <Typography
        color="text.primary"
        fontWeight="bold"
        component="h2"
        variant="h6"
      >
        {breadcrumbs[`/${pathnames.slice(0, pathnames.length).join('/')}`]}
      </Typography>
    );

  return (
    <Breadcrumbs
      maxItems={3}
      sx={{
        '& .MuiBreadcrumbs-separator': {
          marginX: '6px',
          fontWeight: 'bold',
          color: 'primary.main',
        },
      }}
    >
      {!pathnames.length ? (
        <Typography color="text.primary"> {breadcrumbs['/']}</Typography>
      ) : (
        <Link
          component={LinkRouter}
          color="text.secondary"
          underline="hover"
          to="/"
        >
          {breadcrumbs['/']}
        </Link>
      )}

      {pathnames.map((path, index) => {
        if (index >= 3) return;

        const last: boolean =
          index === pathnames.length - (pathnames.length > 3 ? 2 : 1);
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="text.primary" fontWeight="bold" key={to}>
            {breadcrumbs[to]}
          </Typography>
        ) : (
          <Link
            key={to}
            component={LinkRouter}
            to={to.includes(':id') ? to.replace(':id', id ?? '') : to}
            color="text.secondary"
            underline="hover"
          >
            {breadcrumbs[to]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
