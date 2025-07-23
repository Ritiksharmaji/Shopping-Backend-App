const paymentService = require("../services/payment.service.js");

// Create a Razorpay Payment Link using order ID from params
const createPaymentLink = async (req, res) => {
  try {
    const paymentLink = await paymentService.createPaymentLink(req.params.id); // Generate link
    return res.status(200).send(paymentLink); // Send link in response
  } catch (error) {
    return res.status(500).send(error.message); // Handle errors
  }
};

// Update order payment status based on query params (usually from callback)
const updatePaymentInformation = async (req, res) => {
  try {
    await paymentService.updatePaymentInformation(req.query); // Update payment info
    return res.status(200).send({ message: "payment information updated", status: true });
  } catch (error) {
    return res.status(500).send(error.message); // Handle errors
  }
};

module.exports = { createPaymentLink, updatePaymentInformation };
