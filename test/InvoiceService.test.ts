import { expect } from 'chai';
import { InvoiceService } from '../src/domain/entity/invoice/InvoiceService';
import { FixedCompensation } from '../src/domain/entity/service/FixedCompensation';
import { HourCompensation } from '../src/domain/entity/service/HourCompensation';
import { Service } from '../src/domain/entity/service/Service';

describe('InvoiceService', () => {
  it('should be able to return the total', () => {
    // Arrange
    const serviceCompensation = new HourCompensation(35, 168);
    const service = new Service('Backend', serviceCompensation);
    const invoiceService = new InvoiceService(service, 'Development service');
    // Act
    const total = invoiceService.getTotal();
    // Assert
    expect(total).to.equal(5880);
  });

  it('should be able to return the total', () => {
    // Arrange
    const serviceCompensation = new FixedCompensation(3500);
    const service = new Service('Backend', serviceCompensation);
    const invoiceService = new InvoiceService(service, 'Development service');
    // Act
    const total = invoiceService.getTotal();
    // Assert
    expect(total).to.equal(3500);
  });
});
