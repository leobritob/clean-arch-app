import { expect } from 'chai';
import { HourCompensation } from '../src/domain/entity/service/HourCompensation';

describe('HourCompensation', () => {
  it('should be able to return the total', () => {
    // Arrange
    const fixed = new HourCompensation(35, 168);
    // Act
    const total = fixed.getTotal();
    // Assert
    expect(total).to.equal(5880);
  });
});
