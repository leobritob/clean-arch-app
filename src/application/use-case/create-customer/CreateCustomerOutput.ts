import { CustomerAddress } from '../../../domain/entity/customer/CustomerAddress';
import { CustomerContact } from '../../../domain/entity/customer/CustomerContact';

export class CreateCustomerOutput {
  constructor(
    readonly name: string,
    readonly contacts: CustomerContact[],
    readonly address: CustomerAddress[]
  ) {}
}
