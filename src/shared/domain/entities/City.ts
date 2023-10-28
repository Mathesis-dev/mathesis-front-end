import { capitalizeString, normalizeString } from '@/shared/utils/String';

export default class City {
  constructor(public name: string, public ibgeCode: string) {}

  static make(data: any): City {
    const code = data.codigo_ibge ? data.codigo_ibge.slice(2, 7) : '';
    return new City(normalizeString(data.nome ?? '').toUpperCase(), code);
  }
}
