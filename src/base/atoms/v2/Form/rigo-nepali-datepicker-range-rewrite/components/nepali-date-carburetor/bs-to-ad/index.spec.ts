/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe } from 'mocha';
import { BSToAD } from '.';

chai.use(chaiAsPromised);

const expect = chai.expect;
describe('Nepali Date Converter', () => {
  it('should convert nepali string date to correct english date', () => {
    const response = BSToAD('2081-02-32');

    expect(response).to.be.equal('2024-06-14');
  });
});
