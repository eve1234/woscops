var config = {
    // Price in pounds for items
    price_per_shirt: 10,
    price_per_APL: 1,
    price_per_AVC: 2,
    price_per_BAN: 3,
    price_per_CTP: 4,
    price_per_PAP: 6,
    price_per_PCH: 7,
    price_per_PER: 8,
    price_per_FIG: 5,


    // Set to your Stripe publishable key. (The one here is for a test
    // account, which may or may not be working.)
    stripe_publishable_key: 'pk_test_9pYx4CRGRbdxI2RYHh7l3ESa',

    // Set to your Stripe secret key. (The one here is for a test account,
    // which may or may not be working.)
    stripe_secret_key: 'sk_test_Y1LbAUutnGnPFT8s3XWURq1y',

    // You should set this to a static (but secret) value, as it's
    // used to authenticate session data. `openssl rand -base64 24`
    // should do the trick. (It doesn't matter for the default app
    // since we only use the session for the CSRF token.)
    secret: 'KUSYlwSH/2KJCea+IB2jjnqlyv8C6wGt'
  };

module.exports = config;
