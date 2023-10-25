import CryptoJS from 'crypto-js';

const KEY = import.meta.env.VITE_ENCRYPTION_KEY;

export function encrypt(data: string): string {
  return CryptoJS.AES.encrypt(data, KEY).toString();
}

export function decrypt(encryptedData: string): string {
  return CryptoJS.AES.decrypt(encryptedData, KEY).toString(CryptoJS.enc.Utf8);
}
