const razorpay = require("../config/razorpayClient");
const orderService = require("../services/order.service.js");

// Create a Razorpay Payment Link for a given order
const createPaymentLink = async (orderId) => {
  try {
    const order = await orderService.findOrderById(orderId); // Fetch order details

    const paymentLinkRequest = {
      amount: order.totalPrice * 100, // Convert to paisa
      currency: 'INR',
      customer: {
        name: order.user.firstName + ' ' + order.user.lastName,
        contact: order.user.mobile,
        email: order.user.email,
      },
      notify: {
        sms: true,
        email: true,
      },
      reminder_enable: true,
      callback_url: `http://localhost:5173/payment/${orderId}`, // Redirect after payment
      callback_method: 'get',
    };

    const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest); // Create payment link

    // Return payment link details
    return {
      paymentLinkId: paymentLink.id,
      payment_link_url: paymentLink.short_url,
    };
    
  } catch (error) {
    console.error('Error creating payment link:', error);
    throw new Error(error.message);
  }
};

// Update order payment status after successful payment
const updatePaymentInformation = async (reqData) => {
  const paymentId = reqData.payment_id;
  const orderId = reqData.order_id;

  try {
    const order = await orderService.findOrderById(orderId); // Fetch order
    const payment = await razorpay.payments.fetch(paymentId); // Fetch payment details

    if (payment.status === 'captured') { // Check if payment is successful
      order.paymentDetails.paymentId = paymentId;
      order.paymentDetails.status = 'COMPLETED';
      order.orderStatus = 'PLACED';
      await order.save(); // Save updated order
    }

    console.log('payment status', order);
    return { message: 'Your order is placed', success: true };
    
  } catch (error) {
    console.error('Error processing payment:', error);
    throw new Error(error.message);
  }
};

module.exports = { createPaymentLink, updatePaymentInformation };
