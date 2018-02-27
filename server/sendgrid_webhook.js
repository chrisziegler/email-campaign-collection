var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'randomsubdomainfkjfksdkf' }, function(
  err,
  tunnel
) {
  console.log('LT running');
});
