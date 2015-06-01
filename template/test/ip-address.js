'use strict';

var expect = require('chai').expect;
var adjust = require('../');

describe('{{classname}}', function () {
  describe('#checkIpAddress(ip)', function () {
    describe('with not allowed ip address', function () {
      it('should return false', function () {
        var ips = [
          '67.172.12.102',
          '17.238.187.218',
          '64.171.241.8',
          '154.208.137.7',
          '217.233.238.154',
          '32.188.153.145',
          '46.8.82.209',
          '126.209.18.193',
          '126.30.40.142',
          '13.226.106.77',
          '143.92.84.42',
          '45.221.48.8'
        ];

        ips.forEach(function (ip) {
          var res = adjust.checkIpAddress(ip);
          expect(res).to.be.false;
        });
      });
    });

    describe('with allowed ip address', function () {
      it('should return true', function () {
        var ips = [
          // 請填入 ip address
        ];

        ips.forEach(function (ip) {
          var res = adjust.checkIpAddress(ip);
          expect(res).to.be.true;
        });
      });
    });
  });
});
