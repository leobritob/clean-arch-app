import { expect } from 'chai';
import { Cpf } from '../src/domain/entity/customer/Cpf';
import { Customer } from '../src/domain/entity/customer/Customer';
import { CustomerAddress } from '../src/domain/entity/customer/CustomerAddress';
import { CustomerContact } from '../src/domain/entity/customer/CustomerContact';
import { Invoice } from '../src/domain/entity/invoice/Invoice';
import { InvoiceService } from '../src/domain/entity/invoice/InvoiceService';
import { HourCompensation } from '../src/domain/entity/service/HourCompensation';
import { Service } from '../src/domain/entity/service/Service';

describe('Invoice', () => {
  it('should be able to calculate invoice total value', () => {
    // Arrange
    const customer = new Customer('Company ABC');
    const cpf = new Cpf('130.759.840-43');
    customer.addDocument(cpf);
    const contact = new CustomerContact('user@email.com', '+5511999999999');
    customer.addContact(contact);
    const address = new CustomerAddress('Rua', '123', 'Centr', 'Ribeirão Preto', 'SP', 'Brazil');
    customer.addAddress(address);

    const serviceCompensation = new HourCompensation(35, 168);
    const service = new Service('Backend service', serviceCompensation);
    const invoiceServices = new InvoiceService(service, 'Development service');

    const serviceCompensation2 = new HourCompensation(40, 168);
    const service2 = new Service('Frontend service', serviceCompensation2);
    const invoiceServices2 = new InvoiceService(service2, 'Development service');

    const invoice = new Invoice();
    invoice.addCustomer(customer);
    invoice.addService(invoiceServices);
    invoice.addService(invoiceServices2);
    // Act
    const total = invoice.getTotal();
    // Assert
    expect(total).to.eq(12600);
  });
});
