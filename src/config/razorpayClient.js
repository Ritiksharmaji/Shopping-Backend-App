const Razorpay = require('razorpay');

apiKey="rzp_test_SDyJ0uAA2245sZ"
apiSecret="XxQAHduCvJbDv5l2MHQ6xQVs"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;