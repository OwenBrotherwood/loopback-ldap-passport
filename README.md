# loopback-ldap-passport
Loopback, using a third party login provider with focus on ldap passport 

The express-ldap-passport shows a "normal" configuration gleaned from reading express and passport.

The use case for a working example for loopback (strongloop) is based on that the present focus is IoT.
However, in an solution that is not on the internet, authentication and authorization (AA) using internal security systems becomes important.

At the time being, I have not found a clear example as to how to use loopback with internal security systems: the focus has been on Internet based AA.

# Use cases
Access to an app that "just" requires an authentication, authorization is given.

Access to an app that requires being a member of a (LDAP/AD) group.

An interesting sub-case is that a typical loopback app has some form of user database. 
In an (LDAP/AD) case, it would be desirable that the user is automatically created if  authorization allows for this: otherwise 