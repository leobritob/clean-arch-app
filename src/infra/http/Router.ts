import { RepositoryFactory } from '../../domain/factory/RepositoryFactory';
import { CustomerController } from '../controller/CustomerController';
import { Http } from './Http';

export class Router {
  constructor(private readonly http: Http, private readonly repositoryFactory: RepositoryFactory) {}

  init() {
    this.http.route('/api/v1/customers', 'post', async ({ body }) => {
      const customer = new CustomerController(this.repositoryFactory);
      return customer.save(body);
    });
    this.http.route('/api/v1/customers', 'get', async ({ body }) => {
      const customers = new CustomerController(this.repositoryFactory);
      return customers.findAll();
    });
    this.http.route('/api/v1/customers/:id', 'get', async ({ params }) => {
      const customers = new CustomerController(this.repositoryFactory);
      return customers.findOneById(params.id);
    });
  }
}
