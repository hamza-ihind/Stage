import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAsaRGgkeeRzzAzSdfuWGgw03vOSS8j0ac',

	authDomain: 'arrows-fd639.firebaseapp.com',

	projectId: 'arrows-fd639',

	storageBucket: 'arrows-fd639.appspot.com',

	messagingSenderId: '126534962291',

	appId: '1:126534962291:web:ea61818d0ea4577fc46e06',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
