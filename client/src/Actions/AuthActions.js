import firebase from 'firebase';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN,
	USER_AUTH_GOOGLE_SUCCESS,
	SIGN_OUT_GOOGLE
} from './types.js';

export const authUserGoogle = () => dispatch => {
	let provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('profile');

	dispatch({ type: USER_LOGIN });

	firebase
		.auth()
		.signInWithRedirect(provider)
		.then(() => {
			console.log('Then block after signInWithRedirect');
			firebase
				.auth()
				.getRedirectResult()
				.then(result => {
					console.log(result);
					if (result.credential) {
						// This gives you a Google Access Token. You can use it to access the Google API.
						let token = result.credential.accessToken;
						// ...
					}
					// The signed-in user info.
					let user = result.user;
					authGoogleSuccess(dispatch, user);
				})
				.catch(error => {
					// Handle Errors here.
					let errorCode = error.code;
					let errorMessage = error.message;
					// The email of the user's account used.
					let email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					let credential = error.credential;
					// ...
					console.log(
						'errorCode',
						errorCode,
						'errorMessage',
						errorMessage,
						'email',
						email,
						'credential',
						credential
					);
				});
		});
};

export const signOutGoogle = () => dispatch => {
	dispatch({ type: SIGN_OUT_GOOGLE });
	firebase
		.auth()
		.signOut()
		.then(function() {
			// Sign-out successful.
			console.log('google sign out successful');
			//TODO handle route to home page
		})
		.catch(function(error) {
			// An error happened.
			console.log(error);
		});
};

export const emailChanged = text => ({
	type: EMAIL_CHANGED,
	payload: text
});

export const passwordChanged = text => ({
	type: PASSWORD_CHANGED,
	payload: text
});

// with ReduxThunk this action creator is now returning a function
//need this for asynchronous calls like http/ajax
export const loginUser = ({ email, password }) => dispatch => {
	dispatch({ type: USER_LOGIN });

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(error => {
			console.log(error);

			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(user => loginUserSuccess(dispatch, user))
				.catch(err => loginUserFailure(dispatch, err));
		});
};

// HELPER FUNCTIONS
const loginUserFailure = (dispatch, err) => {
	console.log(err);
	dispatch({ type: USER_LOGIN_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: USER_LOGIN_SUCCESS,
		payload: user
	});
	//TODO HANDLE ROUTING TO CORRECT PAGE
};

const authGoogleSuccess = (dispatch, user) => {
	dispatch({
		type: USER_AUTH_GOOGLE_SUCCESS,
		payload: user
	});
	console.log('auth google success');
	//user react-native-router-flux to nav to correct screen/scene
	// key property of scene is used as method on Actions
	//TODO handle routing
};
