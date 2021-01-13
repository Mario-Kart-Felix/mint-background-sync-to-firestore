let isFirebaseInitialized = false;

const settings = new Store("settings");

function initializeFirebase({settings}){
  if( isFirebaseInitialized ){
    return firebase;
  }

  firebase.initializeApp({
    apiKey: settings.get("apiKey"),
    storageBucket: settings.get("storageBucket")
  });
  isFirebaseInitialized = true;
  return firebase;
}
