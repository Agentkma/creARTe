import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';

import Reducers from './Reducers';
import './Styles/App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Canvas from './Components/Canvas';
import SelectSplice from './Components/SelectSplice';
import PreviewCompleted from './Components/PreviewCompleted';
import GalleryUser from './Components/GalleryUser';

// TODO add Link to to select, draw, preview, gallery components

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		var config = {
			apiKey: 'AIzaSyBz2gdsrNMTs-PMH7IW29vSsNWsFWjPpPg',
			authDomain: 'crearte-d89e7.firebaseapp.com',
			databaseURL: 'https://crearte-d89e7.firebaseio.com',
			projectId: 'crearte-d89e7',
			storageBucket: 'crearte-d89e7.appspot.com',
			messagingSenderId: '582083078574'
		};
		firebase.initializeApp(config);
	}

	componDidUpdate() {
		// Track the UID of the current user.
		var currentUid = null;
		firebase.auth().onAuthStateChanged(function(user) {
			// onAuthStateChanged listener triggers every time the user ID token changes.
			// This could happen when a new user signs in or signs out.
			// It could also happen when the current user ID token expires and is refreshed.
			if (user && user.uid != currentUid) {
				// Update the UI when a new user signs in.
				// Otherwise ignore if this is a token refresh.
				// Update the current user UID.
				currentUid = user.uid;
				document.body.innerHTML =
					'<h1> Congrats ' +
					user.displayName +
					', you are done! </h1> <h2> Now get back to what you love building. </h2> <h2> Need to verify your email address or reset your password? Firebase can handle all of that for you using the email you provided: ' +
					user.email +
					'. <h/2>';
			} else {
				// Sign out operation. Reset the current user UID.
				currentUid = null;
				console.log('no user signed in');
			}
		});
	}

	render() {
		const composeEnhancers =
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		const store = createStore(
			Reducers,
			/* preloadedState, */ composeEnhancers(applyMiddleware(ReduxThunk))
		);

		return (
			<Provider store={store}>
				<Router>
					<div className="App ">
						<NavBar />
						<main>
							<Route exact path="/" component={Home} />
							<Route
								exact
								path="/select"
								component={SelectSplice}
							/>
							<Route path="/draw" component={Canvas} />
							<Route
								exact
								path="/preview"
								component={PreviewCompleted}
							/>
							<Route path="/gallery" component={GalleryUser} />
						</main>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
