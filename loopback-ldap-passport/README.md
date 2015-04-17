Status:: on hold
Get a basic loopback-basic-passport to work and apply the knowledge earned in this section...

As time goes by ... a version of loopback-ldap-passport that works 

Unfortunatly, the doc for the loopback-component-passport is not really geared to the process of going from express-ldap-passport.

I start by ensuring that https://github.com/jaredhanson/passport-local works in an slc / passport app
As local does not require access to external resources like Facebook etc, it should prove to be a method to finding a correct method to combine passport and slc.

Latter, get hairy with LDAP

https://github.com/strongloop/loopback-component-passport
Understand
https://github.com/strongloop/loopback-component-passport/blob/master/lib/passport-configurator.js
And, maybe, most importantly the models in 
https://github.com/strongloop/loopback-component-passport/tree/master/lib

