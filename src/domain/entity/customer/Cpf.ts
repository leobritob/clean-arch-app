import { CustomerDocument } from './CustomerDocument';
import { cpf } from 'cpf-cnpj-validator';
import { Documents } from './Documents';

export class Cpf implements CustomerDocument {
  constructor(readonly document: string, readonly description: string = Documents.CPF) {}

  isValid(): boolean {
    return cpf.isValid(this.document);
  }
}
