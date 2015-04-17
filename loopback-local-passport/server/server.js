var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;
  
//
// I would prefer that this code was somewhere else (../boot/passport.js ?)
// I think it could be important that the code is "after" boot, or at a specific point in boot.
// "work in progress" I follow the yellow brick road from googling...
//
var flash      = require('express-flash');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

// Setup the view engine (jade)
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function (req, res, next) {
  res.render('pages/index', {user:
    req.user,
    url: req.url
  });
});

app.get('/login', function (req, res, next){
  res.render('pages/login', {
    user: req.user,
    url: req.url
   });
});

// Requests that get this far won't be handled
// by any middleware. Convert them into a 404 error
// that will be handled later down the chain.
app.use(loopback.urlNotFound());

// The ultimate error handler.
app.use(loopback.errorHandler());

var providerPassportConfig = {};
try {
	providerPassportConfig = require('../providers.json');
} catch (err) {
	console.trace(err);
	process.exit(1); // fatal
}
var loopbackPassport = require('loopback-component-passport');
var PassportConfigurator = loopbackPassport.PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);
passportConfigurator.init();

/*
// I need to understand what the models are and how to define from what source
passportConfigurator.setupModels({
	userModel: app.models.user,
	userIdentityModel: app.models.userIdentity,
	userCredentialModel: app.models.userCredential
});
*/

for (var s in providerPassportConfig) {
	var c = providerPassportConfig[s];
	c.session = c.session !== false;
	passportConfigurator.configureProvider(s, c);
}

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
