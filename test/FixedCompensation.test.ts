import { expect } from 'chai';
import { FixedCompensation } from '../src/domain/entity/service/FixedCompensation';

describe('FixedCompensation', () => {
  it('should be able to return the total', () => {
    // Arrange
    const fixed = new FixedCompensation(500);
    // Act
    const total = fixed.getTotal();
    // Assert
    expect(total).to.equal(500);
  });
});
