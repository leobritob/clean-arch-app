import { ServiceCompensation } from './ServiceCompensation';

export class Service {
  constructor(
    readonly name: string,
    readonly serviceCompensation: ServiceCompensation,
    readonly description?: string
  ) {}

  getTotal(): number {
    return this.serviceCompensation.getTotal();
  }
}
