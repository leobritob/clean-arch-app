import { expect } from 'chai';
import { Cnpj } from '../src/domain/entity/customer/Cnpj';

describe('Cnpj', () => {
  it('should be able to validate a valid cnpj', () => {
    // Act
    const cnpj = new Cnpj('44.581.488/0001-63');
    // Assert
    expect(cnpj.isValid()).to.be.equal(true);
  });

  it('should be able to validate an invalid cnpj', () => {
    // Act
    const cnpj = new Cnpj('55.581.488/0001-63');
    // Assert
    expect(cnpj.isValid()).to.be.equal(false);
  });
});
