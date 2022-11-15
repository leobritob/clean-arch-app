import { expect } from 'chai';
import { Cpf } from '../src/domain/entity/customer/Cpf';

describe('Cpf', () => {
  it('should be able to validate a valid cpf', () => {
    // Act
    const cpf = new Cpf('130.759.840-43');
    // Assert
    expect(cpf.isValid()).to.be.equal(true);
  });

  it('should be able to validate an invalid cpf', () => {
    // Act
    const cpf = new Cpf('129.629.010-37');
    // Assert
    expect(cpf.isValid()).to.be.equal(false);
  });
});
