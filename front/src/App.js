import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './img/logo.svg';
import './Styles/App.css';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Canvas from './Components/Canvas';
import SelectSplice from './Components/SelectSplice';
import PreviewCompleted from './Components/previewCompleted';
import GalleryUser from './Components/galleryUser';

// TODO add Link to to select, draw, preview, gallery components

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPanel: 'hidden',
			selectedArt: null,
			createdArt: null
		};
	}

	render() {
		return (
			<div className="App">
				<NavBar />
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/select" component={SelectSplice} />
						<Route path="/draw" component={Canvas} />
						<Route
							exact
							path="/preview"
							component={PreviewCompleted}
						/>
						<Route path="/gallery" component={GalleryUser} />
					</div>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
