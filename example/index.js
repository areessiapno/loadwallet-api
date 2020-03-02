"use strict";

const LoadWalletAPI = require("../lib");

var client = new LoadWalletAPI({
    username: "yourusername" 
  , password: "yourpassword"
});

client.balanceInquiry((err, data) => {
  console.log(err || data);
});
