import axios from 'axios';

import UF from '../domain/entities/UF';

import { isArray } from '../utils/Array';
import City from '../domain/entities/City';

export default class BrazilRepository {
  private uri: string = 'https://brasilapi.com.br/api';

  private isOK(status: number): boolean {
    return status >= 200 && status < 300;
  }

  public async states(): Promise<Array<UF>> {
    const { status, data } = await axios.get<Array<UF>>(
      `${this.uri}/ibge/uf/v1`
    );

    if (this.isOK(status))
      return isArray(data) ? data.map(UF.make) : ([] as Array<UF>);

    throw new Error('Ops... Algo inesperado aconteceu!');
  }

  public async cities(state: string): Promise<Array<City>> {
    const { status, data } = await axios.get(
      `${this.uri}/ibge/municipios/v1/${state}?providers=dados-abertos-br,gov`
    );

    if (this.isOK(status))
      return isArray(data) ? data.map(City.make) : ([] as Array<City>);

    throw new Error('Ops... Algo inesperado aconteceu!');
  }
}
