'use strict';
var app = angular.module('Oidc', ['ngOidc']);

app.controller("Ctrl", function ($oidc) {

  document.querySelector(".login").addEventListener("click", login, false);

  function login() {
    $oidc.signinRedirect();
    // $oidc.signinPopup();
    // $oidc.signinSilent();
  }

  document.querySelector(".get").addEventListener("click", get, false);

  function get() {
    $oidc.getUser().then(function (user) {
      console.log(user);
    });;
  }

  document.querySelector(".removeUser").addEventListener("click", removeUser, false);

  function removeUser() {
    $oidc.removeUser();
  }

  document.querySelector(".revokeAccessToken").addEventListener("click", revokeAccessToken, false);

  function revokeAccessToken() {
    $oidc.revokeAccessToken();
  }

  document.querySelector(".signoutRedirect").addEventListener("click", signoutRedirect, false);

  function signoutRedirect() {
    $oidc.signoutRedirect();
  }

  document.querySelector(".querySessionStatus").addEventListener("click", querySessionStatus, false);

  function querySessionStatus() {
    $oidc.querySessionStatus();
  }

  document.querySelector(".clearStaleState").addEventListener("click", clearStaleState, false);

  function clearStaleState() {
    $oidc.clearStaleState();
  }



  var data = function () {
    console.log("Event UserSignedOut");
    $oidc.logout();
  }

  $oidc.addUserSignedOut(data);

});






app.config(function ($authProvider) {
  $authProvider.configure({
    authority: "myWebSite",
    client_id: "myClient",
    redirect_uri: (window.location.origin || window.location.protocol + '//' + window.location.host) + window.location.pathname + '#!/auth/callback/',
    post_logout_redirect_uri: window.location.origin,

    // For Custom CallbackUrl
    // redirectCallback: "https://www.google.com/"

    // For Config Storage
    // The userStore needs to implement this "interface": https://github.com/IdentityModel/oidc-client-js/blob/dev/src/WebStorageStateStore.js
    // import { WebStorageStateStore } from "oidc-client";

    // userStore: new WebStorageStateStore({
    //   store: window.localStorage
    // })

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

  });
});