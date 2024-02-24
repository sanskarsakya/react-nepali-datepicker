/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe } from 'mocha';
import { ADToBS } from '.';

chai.use(chaiAsPromised);

const expect = chai.expect;
describe('Nepali Date Converter', () => {
  it('should convert english string date to correct nepali date', () => {
    const response = ADToBS('2024-06-14');
    expect(response).to.equal('2081-02-32');
  });
});
