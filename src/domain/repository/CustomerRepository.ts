import { Customer } from '../entity/customer/Customer';

export interface CustomerRepository {
  findAll(): Promise<Customer[]>;
  findOneById(id: string): Promise<Customer>;
  save(customer: Customer): Promise<Customer>;
}
