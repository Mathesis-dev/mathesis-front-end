import axios from 'axios';

export function formatErrorForNotification(unhandledError: any): string {
  let returnMessage = '';

  const errorMessageOrName = unhandledError.message
    ? unhandledError.message
    : unhandledError.name;

  if (axios.isAxiosError(unhandledError)) {
    const { message } = unhandledError.response?.data || {
      message: errorMessageOrName,
    };

    if (typeof message === 'object' && message !== null) {
      let errorsStringify = '';

      if (Array.isArray(message)) {
        errorsStringify = message.reduce((prev, error) => {
          return (prev += `${error} \n`);
        }, '');
      } else {
        errorsStringify = Object.entries(message)
          .map(([key, value]) => (value == message ? '' : value))
          .join('\n');
      }

      returnMessage = errorsStringify;
    } else {
      returnMessage = message;
    }
  }

  return returnMessage?.length ? returnMessage : errorMessageOrName;
}

export function showZodError(error: any) {
  const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;

  if (ENVIRONMENT === 'development') console.warn('ZOD Error: ', error);
}
