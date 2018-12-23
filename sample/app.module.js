'use strict';
var app = angular.module('Oidc', ['ngOidc']);

app.controller("Ctrl", function ($auth) {

  document.querySelector(".request").addEventListener("click", login, false);
  function login() {
    $auth.signinRedirect();
    // $auth.signinPopup();
  }

  document.querySelector(".get").addEventListener("click", get, false);
  function get() {
    $auth.getUser().then(function (user) {
      console.log(user);
    });;

  }

  document.querySelector(".removeUser").addEventListener("click", removeUser, false);
  function removeUser() {
    $auth.removeUser();
  }

  document.querySelector(".revoke").addEventListener("click", revoke, false);
  function revoke() {
    $auth.revoke();
  }

  document.querySelector(".logout").addEventListener("click", logout, false);
  function logout() {
    $auth.logout();
  }



  var data = function () {
    console.log("Event UserSignedOut");
  }

  $auth.addUserSignedOut(data);

});






app.config(function ($authProvider) {
  $authProvider.configure(
    {
      authority: "http://auth.tinet.ir/",
      client_id: "myclient",
      redirect_uri: (window.location.origin || window.location.protocol + '//' + window.location.host) + window.location.pathname + '#!/auth/callback/',
      post_logout_redirect_uri: window.location.origin,

      // if we choose to use popup window instead for logins
      // popup_redirect_uri: (window.location.origin || window.location.protocol + '//' + window.location.host) + window.location.pathname + '#!/auth/popup/', popupWindowFeatures: "menubar=yes,location=yes,toolbar=yes,width=1200,height=800,left=100,top=100;resizable=yes",

      // these two will be done dynamically from the buttons clicked, but are
      // needed if you want to use the silent_renew
      // response_type: "id_token token",
      // scope: "openid profile email phone",

      // this will toggle if profile endpoint is used
      // loadUserInfo: true,

      // silent renew will get a new access_token via an iframe 
      // just prior to the old access_token expiring (60 seconds prior)
      //  silent_redirect_uri: (window.location.origin || window.location.protocol + '//' + window.location.host) + window.location.pathname + '#!/auth/silent/', automaticSilentRenew: true,

      // will revoke (reference) access tokens at logout time
      // revokeAccessTokenOnSignout: true,

      // this will allow all the OIDC protocol claims to be visible in the window. normally a client app 
      // wouldn't care about them or want them taking up space
      // filterProtocolClaims: false
    }
  );
});
