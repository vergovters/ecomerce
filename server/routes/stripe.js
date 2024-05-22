const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Define POST route for payment processing
router.post("/payment", (req, res) => {
  // Retrieve tokenId and amount from request body
  const { tokenId, amount } = req.body;

  // Create a charge using the Stripe API
  stripe.charges.create(
    {
      source: tokenId,
      amount: amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        // Handle error if charge creation fails
        res.status(500).json({ error: stripeErr.message });
      } else {
        // Respond with success if charge creation is successful
        res.status(200).json({ message: "Payment successful", charge: stripeRes });
      }
    }
  );
});

// Export the router
module.exports = router;