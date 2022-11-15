import { RepositoryFactory } from '../../../domain/factory/RepositoryFactory';
import { CustomerRepository } from '../../../domain/repository/CustomerRepository';
import { FindOneByIdOutput } from './FindOneByIdOutput';

export class FindOneByIdUseCase {
  private readonly customerRepository: CustomerRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.customerRepository = repositoryFactory.createCustomerRepository();
  }

  async execute(id: string): Promise<FindOneByIdOutput> {
    const customer = await this.customerRepository.findOneById(id);
    return new FindOneByIdOutput(
      customer.id,
      customer.name,
      customer.contacts,
      customer.addresses,
      customer.documents
    );
  }
}
