/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe } from 'mocha';
import { stitchDate } from '.';

chai.use(chaiAsPromised);

const expect = chai.expect;
describe('Nepali Date Converter', () => {
  it('should return correct stiched date', () => {
    const date = stitchDate(2024, 10, 29);

    expect(date).to.be.equal('2024-10-29');
  });
});
