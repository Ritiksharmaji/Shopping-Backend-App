const Razorpay = require('razorpay');

apiKey="rzp_test_SHAWOr5czfEs6z"
apiSecret="7QLeuhcv2jeQJ09qXoUlyMSz"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;