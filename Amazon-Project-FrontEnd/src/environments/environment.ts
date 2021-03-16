// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:8080',
  facebookAppId: '413281543384405',
  firebase : {
    apiKey: "AIzaSyBuL4HEzb1Ka-XwaDD2aOnLCKi1bQKLCMk",
    authDomain: "open-stack-project-bee7f.firebaseapp.com",
    databaseURL: "https://open-stack-project-bee7f-default-rtdb.firebaseio.com",
    projectId: "open-stack-project-bee7f",
    storageBucket: "open-stack-project-bee7f.appspot.com",
    messagingSenderId: "439359786750",
    appId: "1:439359786750:web:d8ce83e63ef5f3e9d15faf"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
