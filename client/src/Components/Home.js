import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
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
							<h4 className="display-8 text-white ">
								Explore Your Mind&#39;s Eye
							</h4>
							<br />
							<h6 className="lead text-white ">
								Transmute images into unique creations via
								algorithm and human input.
							</h6>
							<hr className="my-2" />
							<p />
							<p className="lead">
								<Link to="/select" className="btn btn-danger">
									Ready. Set. cre<span>ART</span>e
								</Link>
							</p>
						</div>
						<div className="col-s-12 col-md-7 rounded">
							<img
								src={require('../Img/hero.jpg')}
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
