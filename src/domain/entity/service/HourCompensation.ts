import { ServiceCompensation } from './ServiceCompensation';

export class HourCompensation implements ServiceCompensation {
  constructor(readonly price: number, readonly hour: number) {}

  getTotal(): number {
    return this.price * this.hour;
  }
}
