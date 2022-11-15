import { IsEnum, IsNotEmpty } from 'class-validator';
import { Documents } from '../../../domain/entity/customer/Documents';

export class CreateCustomerDocumentDto {
  @IsNotEmpty()
  @IsEnum(Documents)
  description: string;

  @IsNotEmpty()
  document: string;
}
