const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            name: "Subscription",
            currency: "inr",
            amount: process.env.SUBSCRIPTION_PRICE,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: process.env.SUCCESS_URL,
        cancel_url: process.env.FAILURE_URL,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
