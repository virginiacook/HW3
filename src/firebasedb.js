import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCfoEYZhASJMkQR3Qr2neuA5gq-PATBhHk',
  authDomain: 'homework3-16097.firebaseapp.com',
  databaseURL: 'https://homework3-16097.firebaseio.com',
  storageBucket: 'homework3-16097.appspot.com',
};
firebase.initializeApp(config);
// Get a reference to the database service
const database = firebase.database();

export function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    callback(snapshot);
  });
}

export function add(note) {
  database.ref('notes').push(note);
}

export function remove(id) {
  console.log('delete note with id ' + id);
  database.ref('notes').child(id).remove();
}

export function update(id, field) {
  database.ref('notes').child(id).update(field);
}
