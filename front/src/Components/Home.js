import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Jumbotron className="jumbo mb-0 rounded-0">
					<div className="row">
						<div className="col-s-12 col-md-5 px-md-6 ">
							<br />
							<br />
							<h4 className="display-8 text-white frontlog">
								Explore Your Mind&#39;s Eye
							</h4>
							<br />
							<h6 className="lead text-white frontlog">
								Transmute images into unique creations via
								algorithm and human input.
							</h6>
							<hr className="my-2" />
							<p />
							<p className="lead">
								<Link to="/select" className="btn btn-danger">
									Ready. Set. cre<span className="createorlog2">ART</span>ivity
								</Link>
							</p>
						</div>
						<div className="col-s-12 col-md-7 rounded">
							<img
								src="./img/hero.jpg"
								className="img-fluid rounded"
								alt="Jackson Pollock Art"
							/>
						</div>
					</div>
				</Jumbotron>
			</div>
		);
	}
}

export default Home;
