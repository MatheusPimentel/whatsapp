/**
 */
export const checkLoginState = function () {
  FB.getLoginStatus(function(response) {   // See the onlogin handler
    statusChangeCallback.call(this, response)    // Returns the login status.
  })
}

/**
 */
export const login = function () {
  FB.login(function(response) {
    if (response.authResponse) {
      getInformationApi.call(this)
      console.log(response)
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  }, {scope: 'public_profile,email,user_birthday'})
}

/**
 */
export const logout = function () {
  FB.logout(function(response) {
    // user is now logged out
  })
}

/**
 * @param response
 */
export const statusChangeCallback = function (response) {  // Called with the results from FB.getLoginStatus().
  if (response.status === 'connected') {         // Logged into your webpage and Facebook.
    getInformationApi.call(this)
  }
  else {
    console.log('user not logged')
  }
}

/**
 */
export const getInformationApi = function () {             // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  FB.api('/me', function(response) {
    console.log(response)
    console.log('Successful login for: ' + response.name)
  })
}
