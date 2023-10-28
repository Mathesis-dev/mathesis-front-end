export function normalizeString(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function capitalizeString(value: string): string {
  const parts = value.toLowerCase().trim().split(' ');

  return parts
    .map((part) => part[0].toUpperCase() + part.substring(1))
    .join(' ');
}

export function numberString(value: string): string {
  return value.replace(/\D/g, '');
}

export function stringToNumber(value: string): number {
  return parseFloat(value.replace(',', '.'));
}

export function abbreviateString(value: string, limit: number): string {
  return value.length <= limit ? value : value.slice(0, limit) + '...';
}

export function removeTagsHTML(text: string) {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.textContent || div.innerText || '';
}

export function reduceLength(text: string, maxLength: number) {
  if (text.length > maxLength) return `${text.slice(0, maxLength)} ...LER MAIS`;

  return text;
}
