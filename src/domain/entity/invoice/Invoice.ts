import { Customer } from '../customer/Customer';
import { InvoiceService } from './InvoiceService';

export class Invoice {
  invoiceServices: InvoiceService[] = [];
  customer?: Customer;

  addService(item: InvoiceService) {
    this.invoiceServices.push(item);
  }

  addCustomer(customer: Customer) {
    this.customer = customer;
  }

  getTotal(): number {
    return this.invoiceServices.reduce((total, service) => (total += service.getTotal()), 0);
  }
}
