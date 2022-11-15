import { Customer } from '../../../domain/entity/customer/Customer';
import { RepositoryFactory } from '../../../domain/factory/RepositoryFactory';
import { CustomerRepository } from '../../../domain/repository/CustomerRepository';
import { CreateCustomerDto } from './CreateCustomerDto';
import { CreateCustomerOutput } from './CreateCustomerOutput';

export class CreateCustomerUseCase {
  private readonly customerRepository: CustomerRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.customerRepository = repositoryFactory.createCustomerRepository();
  }

  async execute(payload: CreateCustomerDto): Promise<CreateCustomerOutput> {
    const customer = new Customer(
      payload.name,
      payload.addresses,
      payload.contacts,
      payload.documents
    );
    const response = await this.customerRepository.save(customer);
    return new CreateCustomerOutput(response.name, response.contacts, response.addresses);
  }
}
