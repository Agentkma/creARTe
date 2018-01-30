import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button,
	Modal,
	Fade
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ModalSignLogin from './ModalSignLogin.js';
import '../Styles/Modal.css';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.state = {
			isOpen: false,
			modal: false,
			cardStyle: 'card'
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	toggleModal() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<Navbar
				className=" fixed-top NavBar"
				color="faded"
				light
				expand="md"
			>
				<NavbarBrand className="navbar-brand NavText" href="/">
					cre<span>ART</span>e
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem className="NavText">
							<ModalSignLogin />
						</NavItem>

						<NavItem>
							<NavLink
								className="NavText"
								href="https://kevinanderson.codes"
							>
								Contact
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

Navbar.propTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,
	fixed: PropTypes.string,
	color: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
};

NavbarBrand.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
};

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

export default NavBar;
