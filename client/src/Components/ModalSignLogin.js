/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { NavLink, Modal, ModalBody, Fade } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../Actions';

class ModalSignLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			showSignIn: true
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.renderSignInOrSignUp = this.renderSignInOrSignUp.bind(this);
		this.flipCard = this.flipCard.bind(this);
	}

	toggleModal() {
		const { modal } = this.state;
		this.setState({
			modal: !modal
		});
	}

	flipCard() {
		const { showSignIn } = this.state;
		this.setState({ showSignIn: !showSignIn });
	}

	renderSignInOrSignUp() {
		const { showSignIn } = this.state;
		if (showSignIn) {
			return (
				<div className="signIn panel panel-default">
					<form className="form-horizontal">
						<br />

						<h1 className="text-center">
							cre<span className="createorlog1">ART</span>ivity
						</h1>
						<br />
						<br />

						<input
							className="form-control"
							placeholder="Email"
							type="email"
							minLength="6"
							maxLength="20"
							required
						/>
						<input
							className="form-control"
							placeholder="Password"
							type="password"
							minLength="6"
							maxLength="20"
							required
						/>
						<button
							className="btn btn-primary btn-block"
							type="submit"
						>
							LOG IN
						</button>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<p className="text-center">
							<a
								href="#"
								className="fliper-btn createorlog"
								onClick={this.flipCard}
							>
								Create new account?
							</a>
						</p>
					</form>
				</div>
			);
		} else {
			return (
				<div className="  signUp face back">
					<div className="panel panel-default">
						<form
							className="form-horizontal"
							data-toggle="validator"
							role="form"
						>
							<br />
							<h1 className="text-center">
								cre<span>ART</span>e
							</h1>
							<br />
							<label>Basic Information</label>
							<input
								className="form-control"
								placeholder="Full name"
								minLength="6"
								maxLength="20"
								type="text"
								required
							/>
							<input
								className="form-control"
								placeholder="Email"
								type="email"
								minLength="6"
								maxLength="20"
								required
							/>
							<label>Private Information</label>
							<input
								type="password"
								className="form-control"
								placeholder="Password (min 6 characters)"
								minLength="6"
								maxLength="20"
								id="inputPassword"
								required
							/>
							<input
								type="password"
								className="form-control"
								minLength="6"
								maxLength="20"
								placeholder="Confirm Password"
								data-match="#inputPassword"
								data-match-error="Whoops, these don't match"
								required
							/>
							<button
								className="btn btn-primary btn-block"
								type="submit"
							>
								SIGN UP
							</button>
							<br />
							<p className="text-center">
								<a
									href="#"
									className="fliper-btn createorlog"
									onClick={this.flipCard}
								>
									Already have an account?
								</a>
							</p>
						</form>
					</div>
				</div>
			);
		}
	}

	// flipperCard(e) {
	// 	e.preventDefault();
	// 	this.setState({ cardStyle: 'cardSup:not(.signUp))' });
	// }
	//
	// flipper2(e) {
	// 	e.preventDefault();
	// 	this.setState({ cardStyle: 'cardSin:not(.signUp) ' });
	// }

	render() {
		const { modal } = this.state;
		return (
			<NavLink onClick={this.toggleModal} href="#">
				{this.props.username}
				<Modal
					isOpen={modal}
					toggle={this.toggleModal}
					className={this.props.className}
				>
					<ModalBody>
						<div className="container">
							<div className="row">
								<div className="col">
									{this.renderSignInOrSignUp()}
								</div>
							</div>
						</div>
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
const mapStateToProps = ({ user }) => {
	const { username } = user;

	return {
		username
	};
};
//connect action creators { } to ModalSignLogin component
export default connect(mapStateToProps, { signIn })(ModalSignLogin);
