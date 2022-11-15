export class CustomerAddress {
  constructor(
    readonly street: string,
    readonly number: string,
    readonly neighborhood: string,
    readonly city: string,
    readonly state: string,
    readonly country: string,
    readonly complement?: string | null
  ) {}
}
