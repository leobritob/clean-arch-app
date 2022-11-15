import { CustomerDocument } from './CustomerDocument';
import { cnpj } from 'cpf-cnpj-validator';
import { Documents } from './Documents';

export class Cnpj implements CustomerDocument {
  constructor(readonly document: string, readonly description: string = Documents.CNPJ) {}

  isValid(): boolean {
    return cnpj.isValid(this.document);
  }
}
