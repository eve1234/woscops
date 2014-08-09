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
Update app.js with your own Paypal/Google/Stripe tokens/IDs to use this for your own shop. Currently includes a test Stripe acount that may or may not work.
Deploy to Parse cloud.

Acknowledgements
================
Based on the following...

AngularJS Shopping Cart
-----------------------
For the AngularJS shop front code, which in turn is a fork from Bernado Castilho's sample on Code Project.

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
