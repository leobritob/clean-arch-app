import { randomUUID } from 'crypto';
import { CustomerAddress } from './CustomerAddress';
import { CustomerContact } from './CustomerContact';
import { CustomerDocument } from './CustomerDocument';

export class Customer {
  constructor(
    readonly name: string,
    readonly addresses: CustomerAddress[] = [],
    readonly contacts: CustomerContact[] = [],
    readonly documents: CustomerDocument[] = [],
    readonly id: string = randomUUID()
  ) {}

  addDocument(document: CustomerDocument) {
    this.documents.push(document);
  }

  addAddress(address: CustomerAddress) {
    this.addresses.push(address);
  }

  addContact(contact: CustomerContact) {
    this.contacts.push(contact);
  }
}
