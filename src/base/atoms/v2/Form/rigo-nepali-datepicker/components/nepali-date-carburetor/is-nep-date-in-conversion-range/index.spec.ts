/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe } from 'mocha';
import { isNepDateInConversionRange } from '.';

chai.use(chaiAsPromised);

const expect = chai.expect;
describe('Nepali Date Converter', () => {
  it('should return true if nep date is in conversion range', () => {
    const isNepDateInConversionRangeData = isNepDateInConversionRange(
      2080,
      10,
      29,
    );
    expect(isNepDateInConversionRangeData).to.be.true;
  });
  it('should return false if nep date is not in conversion range', () => {
    const isNepDateInConversionRangeData = isNepDateInConversionRange(
      2091,
      10,
      29,
    );
    expect(isNepDateInConversionRangeData).to.be.false;
  });
});
