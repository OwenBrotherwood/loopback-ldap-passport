As time goes by ... a version of loopback-ldap-passport that works 

Unfortunatly, the doc for the loopback-component-passport is not really geared to the process of going from express-ldap-passport.

One key js is https://github.com/strongloop/loopback-component-passport/blob/master/lib/passport-configurator.js

We note that passport.seralizeUser is given, so analyse what else is given and combine with the kbowledge obtained from express-ldap-passport.



