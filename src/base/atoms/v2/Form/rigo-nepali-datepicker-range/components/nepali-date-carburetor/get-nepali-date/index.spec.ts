/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {describe} from 'mocha';
import {getNepaliDate} from '.';
import {stitchDate} from "../stitch-date";

chai.use(chaiAsPromised);

const expect = chai.expect;
describe('Nepali Date Converter', () => {
    it('should return correct converted date', () => {
        const result2 = getNepaliDate(2024, 2, 22);
        const date2 = stitchDate(
            result2.year,
            result2.month,
            result2.day,
        );
        expect(date2).to.be.equal('2080-11-10');

        const result3 = getNepaliDate(2024, 6, 14);
        const date3 = stitchDate(
            result3.year,
            result3.month,
            result3.day,
        );
        expect(date3).to.be.equal('2081-02-32');

    });
});
