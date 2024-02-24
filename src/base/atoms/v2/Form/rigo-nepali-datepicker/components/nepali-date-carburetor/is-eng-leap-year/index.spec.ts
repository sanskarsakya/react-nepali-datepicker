/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe } from 'mocha';
import { isEngLeapYear } from '.';

chai.use(chaiAsPromised);

const expect = chai.expect;
describe('Nepali Date Converter', () => {
  it('should return true for leap year', () => {
    const isEngLeapYearData = isEngLeapYear(2024);
    expect(isEngLeapYearData).to.be.true;
  });
  it('should return false for non leap year', () => {
    const isEngLeapYearData = isEngLeapYear(2023);
    expect(isEngLeapYearData).to.be.false;
  });
});
