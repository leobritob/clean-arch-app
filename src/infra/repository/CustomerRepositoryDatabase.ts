import { Customer } from '../../domain/entity/customer/Customer';
import { CustomerRepository } from '../../domain/repository/CustomerRepository';
import { PrismaConnection } from '../database/PrismaConnection';

export class CustomerRepositoryDatabase implements CustomerRepository {
  constructor(private readonly database: PrismaConnection) {}

  async findAll(): Promise<Customer[]> {
    const response = await this.database.connection.customer.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        addresses: true,
        contacts: true,
        documents: true,
      },
    });
    return response.map((item) => {
      return new Customer(item.name, item.addresses, item.contacts, item.documents, item.id);
    });
  }

  async findOneById(id: string): Promise<Customer> {
    const response = await this.database.connection.customer.findFirstOrThrow({
      select: {
        id: true,
        name: true,
        createdAt: true,
        addresses: true,
        contacts: true,
        documents: true,
      },
      where: { id },
    });
    return new Customer(
      response.name,
      response.addresses,
      response.contacts,
      response.documents,
      response.id
    );
  }

  async save(data: Customer): Promise<Customer> {
    const response = await this.database.connection.customer.create({
      select: {
        id: true,
        name: true,
        addresses: true,
        contacts: true,
        documents: true,
      },
      data: {
        name: data.name,
        documents: { create: data.documents },
        addresses: { create: data.addresses },
        contacts: { create: data.contacts },
      },
    });

    return new Customer(response.name, response.addresses, response.contacts, response.documents);
  }
}
