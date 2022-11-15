import { Service } from '../service/Service';

export class InvoiceService {
  constructor(readonly service: Service, readonly description: string) {}

  getTotal(): number {
    return this.service.getTotal();
  }
}
