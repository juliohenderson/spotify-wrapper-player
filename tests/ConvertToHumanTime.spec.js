import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';


describe('ConvertToHumanTime', function () {
  it('should receive 0ms and convert to 0:00', function () {
    expect(convertToHumanTime(0)).to.be.equal('0:00');
  });


  it('should receive 1000ms and convert to 0:01', function () {
    expect(convertToHumanTime(1000)).to.be.equal('0:01');
  });

  it('should receive 11000ms and convert to 0:11', function () {
    expect(convertToHumanTime(11000)).to.be.equal('0:11');
  });

  it('should receive 60000ms and convert to 1:00', function () {
    expect(convertToHumanTime(60000)).to.be.equal('1:00');
  });
});
