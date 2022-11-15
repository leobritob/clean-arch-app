import { expect } from 'chai';
import { FixedCompensation } from '../src/domain/entity/service/FixedCompensation';
import { HourCompensation } from '../src/domain/entity/service/HourCompensation';
import { Service } from '../src/domain/entity/service/Service';

describe('Service', () => {
  it('should be able to return the total by hour compensation', () => {
    // Arrange
    const serviceCompensation = new HourCompensation(35, 168);
    const service = new Service('Backend service', serviceCompensation);
    // Act
    const result = service.getTotal();
    // Assert
    expect(result).to.equal(5880);
  });

  it('should be able to return the total by fixed compensastion', () => {
    // Arrange
    const serviceCompensation = new FixedCompensation(3500);
    const service = new Service('Backend service', serviceCompensation);
    // Act
    const result = service.getTotal();
    // Assert
    expect(result).to.equal(3500);
  })
});
