WOSCOPS
=======
An open source and free online store front for independent artists to market directly to the public, initially for sintamani. The intention is to have a completely free implementation of an ecommerce website, albeit using proprietary web services (Stripe and Parse). It is aimed at those just starting out, or for those with small inventory ecommerce requirements.

Work in Progress
----------------
This is currently (Aug 2014) non-functional, so any coding help gratefully received.

* chargeurl parameter needs to point to Parse cloud that processes form and commits the charge (https://stripe.com/docs/tutorials/charges).
* Parse cloud code needs to be edited with correct variable names and parameters for different priced items.

Usage
-----
1. Update public/app.js with your own Stripe pk_ID (currently includes a test Stripe acount that may or may not work). Update line:
chargeurl: "https://localhost:1234/processStripe.aspx" // 
Note the PayPal and Google buttons have been commented out (so unavailable in default site).
2. Update partials/store.htm and partials/product.htm to change the DEL1 (International Delivery) cost in all mentions of:
ng-click="cart.addItem('DEL1', 'International Delivery', 7, 1)" <!--where 7 is cost in GBP and DEL1 is sku for delivery charge.!-->
3. Update js/store.js with all items in inventory in format:
new product(sku, "name", "dimensions", "materials", "finish", "description", price) //where sku is the product code and price in GBP (without "" for these 2 items).
Note these descriptive terms can be changed, as per original angularjs-cart for non-jewellery descriptions on the product.js and product.htm pages.
4. Update js/shoppingCart.js to replace private details at:
    StripeCheckout.open({
    });
X. Deploy to Parse cloud with "parse deploy".

Acknowledgements
================
Based on the following...

AngularJS Shopping Cart
-----------------------
For the AngularJS shop front code, which in turn is a fork from Bernado Castilho's sample on Code Project. Renamed ShoppingCart to public to simplify deploying to Parse cloud.

PureCSS
-------
For the CSS layout (Photo Gallery and Landing Page).
Saved to public css folder from http://yui.yahooapis.com/pure/0.3.0/pure-min.css to ensure https access.

Stripe Shop
-----------
For the backend server Parse code (with which I need a lot of help).

Services
========

Requires accounts with...

Stripe
------
To accept credit card payments. This is limited to specific countries, including UK, USA, Canada (maybe others).

Parse
-----
To host the server backend (cloud). The shop itself can also be hosted within the cloud, which offers a free https page necessary.
