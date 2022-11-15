import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCustomerAddress {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  neighborhood: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  country: string;

  @IsOptional()
  complement?: string;
}
