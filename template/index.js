'use strict';

var ThirdParty = require('s2s-third-party');

module.exports = ThirdParty({
  name: '{{basename}}',

  ipWhitelist: [
    // 請填入 ip address
  ],

  getTransaction(postbackContext) {
    return {
      click_id: postbackContext.{{trans_clickid}},
      imei: postbackContext.{{trans_imei}},
      idfa: postbackContext.{{trans_idfa}},
      android_id: postbackContext.{{trans_android_id}},
      advertising_id: postbackContext.{{trans_advertising_id}},
      data: postbackContext.query
    };
  }
});
