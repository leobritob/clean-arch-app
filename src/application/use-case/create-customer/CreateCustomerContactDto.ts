import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCustomerContactDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  phone?: string;
}
