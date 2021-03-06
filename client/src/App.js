import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
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

	render() {
		//applyMiddleware(ReduxThunk) is a store 'enhancer'
		// const composeEnhancers =
		// 	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

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
