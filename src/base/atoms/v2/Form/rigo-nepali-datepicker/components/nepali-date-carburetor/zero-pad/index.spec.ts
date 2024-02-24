/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe } from 'mocha';
import { zeroPad } from '.';

chai.use(chaiAsPromised);

const expect = chai.expect;
describe('Nepali Date Converter', () => {
  it('should return with correct zero padding for single digit', () => {
    const padded = zeroPad(1);
    expect(padded).to.be.equal('01');
  });
  it('should return with correct zero padding for double digit', () => {
    const padded = zeroPad(22);
    expect(padded).to.be.equal('22');
  });
});
