// NOTE: You must replace the client id on the following line.
var clientId = '883845189561-gmrl77nktqfej3k8qt7sc2jamtsq31s8.apps.googleusercontent.com';
var scopes = 'https://www.googleapis.com/auth/spreadsheets';

function init() {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}

function makeApiCall() {
  // Note: The below spreadsheet is "Public on the web" and will work
  // with or without an OAuth token.  For a better test, replace this
  // URL with a private spreadsheet.
  // https://docs.google.com/spreadsheets/d/1crpZnI7t5ZvxP3u3InQSP4tsc8E-4LkTw398ZV2E5Xw/edit#gid=0
  var tqUrl = 'https://docs.google.com/spreadsheets' +
      '/d/1crpZnI7t5ZvxP3u3InQSP4tsc8E-4LkTw398ZV2E5Xw/gviz/tq' +
      '?tqx=responseHandler:handleTqResponse' +
      '&access_token=' + encodeURIComponent(gapi.auth.getToken().access_token);

  document.write('<script src="' + tqUrl +'" type="text/javascript"></script>');
}

function handleTqResponse(resp) {
  document.write(JSON.stringify(resp));
}