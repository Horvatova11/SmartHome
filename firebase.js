import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyCDNpRbx93dv2jWsLLZjkznz8AS2pZj9vw',
	authDomain: 'smarthome-11ed0.firebaseapp.com',
	databaseURL: 'https://smarthome-11ed0.firebaseio.com',
	projectId: 'smarthome-11ed0',
	storageBucket: 'smarthome-11ed0.appspot.com',
	messagingSenderId: '1037591514160',
	appId: '1:1037591514160:web:fd7f6765f0c84b0d39f1f5',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.database()
