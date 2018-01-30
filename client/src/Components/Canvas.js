import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
// import Script from 'react-load-script';
// import fabric from 'fabric';

import CreateArtwork from '../Scripts/CreateArtwork';

class Canvas extends Component {
	componentDidMount() {
		CreateArtwork.init(this.refs.canvas);
	}

	cutImageUp = e => {
		e.preventDefault();
		CreateArtwork.prepareSquares();
		console.log('clicking');
	};
	generateArtwork = e => {
		e.preventDefault();
		CreateArtwork.creArtivity();
		console.log('clicking');
	};
	saveImage = e => {
		e.preventDefault();
		CreateArtwork.saveCanvasImage();
		console.log('clicking');
	};

	render() {
		return (
			<div>
				<Button
					id="CutImageUp"
					type="button"
					name="button"
					onClick={this.cutImageUp.bind(this)}
				>
					Cut Image Into Squares
				</Button>
				<Button
					id="GenerateArtwork"
					type="button"
					name="button"
					onClick={this.generateArtwork.bind(this)}
				>
					Generate Artwork
				</Button>
				<Button
					id="SaveImage"
					type="button"
					name="button"
					onClick={this.saveImage.bind(this)}
				>
					Save Image
				</Button>

				<div className="align-middle">
					<canvas ref="canvas" className="canvas align-middle" />
				</div>

				<div className="button">
					<Button color="primary" size="lg">
						<i className="fa fa-step-backward text-white" /> Go Back
					</Button>{' '}
					<Button color="primary" size="lg">
						{' '}
						Cre<span>ART </span>{' '}
						<i className="fa fa-step-forward text-white" />
					</Button>{' '}
				</div>
			</div>
		);
	}
}

Button.propTypes = {
	active: PropTypes.bool,
	block: PropTypes.bool,
	color: PropTypes.string, // default: 'secondary'
	disabled: PropTypes.bool,

	// Pass in a Component to override default button element
	// example: react-router Link
	// default: 'button'
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	onClick: PropTypes.func,
	size: PropTypes.string
};

export default Canvas;
