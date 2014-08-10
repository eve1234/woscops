/* Initialize the Stripe and Mailgun Cloud Modules */
var Stripe = require('stripe');
Stripe.initialize('sk_test_Y1LbAUutnGnPFT8s3XWURq1y');

// This is a test-bed below at present.... Not working. And doesn't get correct prices etc.

Stripe.Charges.create({
  amount: 100 * 10, // $10 expressed in cents
  currency: "gbp",
  card: data.cardToken // the token id should be sent from the client
},{
  success: function(httpResponse) {
    response.success("Purchase made!");
  },
  error: function(httpResponse) {
    response.error("Uh oh, something went wrong");
  }
});
