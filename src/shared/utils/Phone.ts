export function formatPhone(phone: string): string {
  const regex = /^(\d{2})(\d{4,5})(\d{4})$/;
  return phone.replace(regex, '($1) $2-$3');
}

export function validatePhone(phone: string): boolean {
  const regex = /^\(\d{2}\) \d{4,5}\-\d{4}$/;
  return regex.test(phone);
}

export function formatPhoneNumber(phone: string): string {
  const regex = /^(\d{4,5})(\d{4})$/;
  return phone.replace(regex, '$1-$2');
}

export function validatePhoneNumber(phone: string): boolean {
  const regex = /^\d{4,5}\-\d{4}$/;
  return regex.test(phone);
}

export function formatPhoneDdi(ddi: string): string {
  const regex = /^\+(\d{1,3})$/;
  return ddi.replace(regex, '+$1');
}

export function validatePhoneDdi(ddi: string): boolean {
  const regex = /^\+\d{1,3}$/;
  return regex.test(ddi);
}



