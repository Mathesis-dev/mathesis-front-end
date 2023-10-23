export default class UF {
  constructor(public id: number, public acronym: string, public name: string) {}

  static make(data: any): UF {
    return new UF(data.id ?? 0, data.sigla ?? '', data.nome ?? '');
  }
}
