import * as firebase from 'firebase';

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID=1,
    // measurementId: "G-9LHSTZ5J3H"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  firebase,
  googleAuthProvider,
  facebookAuthProvider, 
  database as default,
};

// database.ref().set({
//     name: 'Irineu',
//     age: 27,
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//         title: 'Software Developer',
//         company: 'Google',
//     },
//     location: {
//         city: 'Rio de Janeiro',
//         country: 'Brazil',
//     },
//     attributes: {
//         height: 86,
//         weight: 80,
//     },
// }).then(() => {
//     console.log('data saved');
// }).catch((error) => {
//     console.log('failed', error);
// });

// database.ref('notes').push({
//     title: 'React Native, Angular, Python',
//     body: 'Course topics',
// });

// database.ref('notes/-M3cWfGDnznHoLZ-fvSs').update({
//     body: 'buy food',
// })

// database.ref('expenses').push({
//     id: '1',
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0,
// });

// database.ref('expenses').push({
//     id: '2',
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf(),
// });

// database.ref('expenses').push({
//     id: '3',
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf(),
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const value = snapshot.val();
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'São Paulo',
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('removed');
//     });

// database.ref('isSingle').set(null)