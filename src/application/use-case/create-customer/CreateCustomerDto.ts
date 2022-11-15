import { ArrayNotEmpty, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { CreateCustomerAddress } from './CreateCustomerAddressDto';
import { CreateCustomerContactDto } from './CreateCustomerContactDto';
import { CreateCustomerDocumentDto } from './CreateCustomerDocumentDto';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  documents: CreateCustomerDocumentDto[];

  @IsOptional()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  addresses?: CreateCustomerAddress[];

  @IsOptional()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  contacts?: CreateCustomerContactDto[];
}
