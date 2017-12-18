import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
	render() {
		//applyMiddleware(ReduxThunk) is a store 'enhancer'
		const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router>
					<div className="App ">
						<NavBar />
						<div>
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
						</div>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
