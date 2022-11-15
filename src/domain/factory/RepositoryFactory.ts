import { CustomerRepository } from '../repository/CustomerRepository';

export interface RepositoryFactory {
  createCustomerRepository(): CustomerRepository;
}
