import { DateTime, DateTimeOptions } from 'luxon';

export function formatDateFromISO(
  ISO: string,
  withHour?: boolean,
  opts?: DateTimeOptions
) {
  const date = DateTime.fromISO(ISO, { zone: 'local', ...opts });

  if (!date.isValid) return '';

  const format = withHour ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy';

  return date.toFormat(format);
}
