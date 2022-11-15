import { CustomerAddress } from '../../../domain/entity/customer/CustomerAddress';
import { CustomerContact } from '../../../domain/entity/customer/CustomerContact';
import { CustomerDocument } from '../../../domain/entity/customer/CustomerDocument';

export class FindOneByIdOutput {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly contacts: CustomerContact[],
    readonly address: CustomerAddress[],
    readonly documents: CustomerDocument[]
  ) {}
}
