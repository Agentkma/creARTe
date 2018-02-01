/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

import { NavLink, Modal, ModalBody, Fade } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Loader from 'react-loader';

import { authUserGoogle, loginUser } from '../Actions';

class ModalFirebaseAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: true,
			showSignIn: true
		};

		this.toggleModal = this.toggleModal.bind(this);
	}

	componentWillMount() {
		var uiConfig = {
			callbacks: {
				signInSuccess: function(currentUser, credential, redirectUrl) {
					// User successfully signed in.
					// Return type determines whether we continue the redirect automatically
					// or whether we leave that to developer to handle.
					return true;
				},
				uiShown: function() {
					// The widget is rendered.
					// Hide the loader.
					document.getElementById('loader').style.display = 'none';
				}
			},
			// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
			signInFlow: 'popup',
			signInSuccessUrl: 'https://crearte-d89e7.firebaseapp.com/',
			signInOptions: [
				// Leave the lines as is for the providers you want to offer your users.
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID
			],
			// Terms of service url.
			tosUrl: '<your-tos-url>'
		};

		// Initialize the FirebaseUI Widget using Firebase.
		var ui = new firebaseui.auth.AuthUI(firebase.auth());
		ui.start('#firebaseui-auth-container', {
			signInOptions: [
				firebase.auth.EmailAuthProvider.PROVIDER_ID,
				firebase.auth.GoogleAuthProvider.PROVIDER_ID
			]
			// Other config options...
		});

		// The start method will wait until the DOM is loaded.
		ui.start('#firebaseui-auth-container', uiConfig);
	}

	toggleModal() {
		const { modal } = this.state;
		this.setState({
			modal: !modal
		});
	}

	render() {
		const { modal } = this.state;
		return (
			<NavLink onClick={this.toggleModal} href="#">
				<span>{this.props.userName}</span>
				<Modal
					isOpen={modal}
					toggle={this.toggleModal}
					className={this.props.className}
				>
					<ModalBody>
						<div id="firebaseui-auth-container" />
						<div id="loader">Loading...</div>
					</ModalBody>
				</Modal>
			</NavLink>
		);
	}
}

Modal.propTypes = {
	// boolean to control the state of the popover
	isOpen: PropTypes.bool,
	autoFocus: PropTypes.bool,
	size: PropTypes.string,
	// callback for toggling isOpen in the controlling component
	toggle: PropTypes.func,
	role: PropTypes.string, // defaults to "dialog"
	// used to reference the ID of the title element in the modal
	labelledBy: PropTypes.string,
	keyboard: PropTypes.bool,
	// control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
	backdrop: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.oneOf(['static'])
	]),
	// called on componentDidMount
	onEnter: PropTypes.func,
	// called on componentWillUnmount
	onExit: PropTypes.func,
	// called when done transitioning in
	onOpened: PropTypes.func,
	// called when done transitioning out
	onClosed: PropTypes.func,
	className: PropTypes.string,
	wrapClassName: PropTypes.string,
	modalClassName: PropTypes.string,
	backdropClassName: PropTypes.string,
	contentClassName: PropTypes.string,
	// boolean to control whether the fade transition occurs (default: true)
	fade: PropTypes.bool,
	cssModule: PropTypes.object,
	// zIndex defaults to 1000.
	zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	// backdropTransition - controls backdrop transition
	// timeout is 150ms by default to match bootstrap
	// see Fade for more details
	backdropTransition: PropTypes.shape(Fade.propTypes),
	// modalTransition - controls modal transition
	// timeout is 300ms by default to match bootstrap
	// see Fade for more details
	modalTransition: PropTypes.shape(Fade.propTypes)
};

// pass state or state props to component via connect(mapStateToProps)
// user comes from key name in index.js from Reducer....other vars are from this reducer state
const mapStateToProps = ({ auth }) => {
	const { userName } = auth;

	return {
		userName
	};
};
//connect action creators { } to ModalSignLogin component
export default connect(mapStateToProps, {
	authUserGoogle,
	loginUser
})(ModalFirebaseAuth);
