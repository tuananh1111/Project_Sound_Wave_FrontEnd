// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyAaF7cyqh4DoWEU2TkDXnUeFe0Le10uH6A',
    authDomain: 'sound-wave-9d45d.firebaseapp.com',
    databaseURL: 'https://sound-wave-9d45d-default-rtdb.firebaseio.com/',
    projectId: 'sound-wave-9d45d',
    storageBucket: 'sound-wave-9d45d.appspot.com',
    messagingSenderId: '368542689977',
    appId: '1:368542689977:web:2f10c095d4d791959b8968',
    measurementId: 'G-XKDW7R2CS7'
  },
  apiUrl: 'http://localhost:8080'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
