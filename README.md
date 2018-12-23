# ngOidc
Library to provide OpenID Connect (OIDC) and OAuth2 protocol support for client-side, browser-based JavaScript client Angularjs applications. Also included is support for user session and access token management.

## Getting started
To install ngOidc use npm
```
npm install ngOidc --save
```

Inject the `$auth`-provider to setup the library while configuring your angular-application

```javascript
var app = angular.module('myApp', ['ngOidc'], function($auth) {
  $auth.configure(
    {
      authority: 'http://....',
      client_id: 'abcd...',
      ...
    }
  );
}
);
```

# Sample

There is a sample in the `sample`-Folder.

## SignIn Method Sample
```javascript
 $auth.signinRedirect();
```

## UserSignedOut Event Sample
Data Is A Function To Run For Event.
```javascript
 $auth.addUserSignedOut(data);
```

## Running the Sample

`npm start`

and then browse to [http://localhost:5000](http://localhost:5000).

# Compatibility
This library has been tested and intensively used with the IdentityServer4. Please see [Thinktecture IdentityServer4](https://github.com/IdentityModel/oidc-client-js) for further details.

## Docs

Some initial docs are [here](https://github.com/IdentityModel/oidc-client-js/wiki).

## Feedback, Feature requests, and Bugs

All are welcome on the [issue tracker](https://github.com/A20Group/ngOidc/issues).