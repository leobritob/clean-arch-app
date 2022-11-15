import { CreateCustomerUseCase } from '../../application/use-case/create-customer/CreateCustomerUseCase';
import { CreateCustomerDto } from '../../application/use-case/create-customer/CreateCustomerDto';
import { RepositoryFactory } from '../../domain/factory/RepositoryFactory';
import { FindAllCustomerUseCase } from '../../application/use-case/find-all-customer/FindAllCustomerUseCase';
import { FindOneByIdUseCase } from '../../application/use-case/find-one-by-id/FindOneByIdUseCase';

export class CustomerController {
  constructor(private readonly repositoryFactory: RepositoryFactory) {}

  findAll() {
    const useCase = new FindAllCustomerUseCase(this.repositoryFactory);
    return useCase.execute();
  }

  findOneById(id: string) {
    const useCase = new FindOneByIdUseCase(this.repositoryFactory);
    return useCase.execute(id);
  }

  save(payload: CreateCustomerDto) {
    const useCase = new CreateCustomerUseCase(this.repositoryFactory);
    return useCase.execute(payload);
  }
}
