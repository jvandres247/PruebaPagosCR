const functions = require('firebase-functions');
const stripe = require('stripe')('sk_test_OXOOo0pwSGaNfJOGQ8BKfOJj');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.completepayWithStripe = functions.https.onRequest(
  (request, response) => {
    // Set your secret key: remember to change this to your live secret key in production
    // See your keys here: https://dashboard.stripe.com/account/apikeys

    // eslint-disable-next-line promise/catch-or-return
    stripe.charges
      .create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: 'tok_visa',
      })
      // eslint-disable-next-line promise/always-return
      .then(charge => {
        // asynchronously called
        response.send(charge);
      })
      .catch(err => {
        console.log(err);
      });
  },
);
