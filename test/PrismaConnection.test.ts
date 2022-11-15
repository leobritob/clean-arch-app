import { expect } from 'chai';
import { PrismaConnection } from '../src/infra/database/PrismaConnection';

describe('PrismaConnection', () => {
  it('should be able to connect to database', () => {
    // Arrange
    const db = new PrismaConnection();
    // Act
    db.connect().then(() => {
      // Assert
      expect(db.connection).to.be.an('object');
    });
  });
});
