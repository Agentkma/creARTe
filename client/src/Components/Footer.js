import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = props => {
	return (
		<footer className="navbar navbar-default navbar-fixed-bottom footer">
			<div className="container">
				<div className="row footer">
					<div className="col-md-4 col-sm-6 col-xs-12">
						<span className="logo">
							cre<span>ART</span>e
						</span>
					</div>

					<div className="col-md-4 col-sm-6 col-xs-12">
						<ul className="menu">
							<span>Menu</span>
							<li>
								<a href="#">Home</a>
							</li>

							<li>
								<Link to="/select" />
							</li>

							<li>
								<a href="#">creART</a>
							</li>
						</ul>
					</div>

					<div className="col-md-4 col-sm-6 col-xs-12">
						<ul className="adress">
							<span>Contact</span>
							<li>
								<i
									className="fa fa-github"
									aria-hidden="true"
								/>{' '}
								<a href="https://github.com/Agentkma">GitHub</a>
							</li>

							<li>
								<i
									className="fa fa-envelope"
									aria-hidden="true"
								/>{' '}
								<a href="kevin@kevinanderson.codes">Email</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
