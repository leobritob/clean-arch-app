import { ServiceCompensation } from './ServiceCompensation';

export class FixedCompensation implements ServiceCompensation {
  constructor(readonly price: number) {}

  getTotal(): number {
    return this.price;
  }
}
