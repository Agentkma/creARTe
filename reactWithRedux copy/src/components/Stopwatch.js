import React, { Component, PropTypes } from 'react';

// Logical Component (Stateful)
export default class Stopwatch extends Component {
	// set initial state
	state = {
		running: false,
		previouseTime: 0,
		elapsedTime: 0
	};
	// lifecycle events
	componentDidMount() {
		this.interval = setInterval(this.onTick);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	// component methods
	onStart = () => {
		this.setState({
			running: true,
			previousTime: Date.now()
		});
	};

	onStop = () => {
		this.setState({
			running: false
		});
	};

	onReset = () => {
		this.setState({
			elapsedTime: 0,
			previousTime: Date.now()
		});
	};

	onTick = () => {
		if (this.state.running) {
			let now = Date.now();
			this.setState({
				elapsedTime:
					this.state.elapsedTime + (now - this.state.previousTime),
				previousTime: Date.now()
			});
		}
	};

	// render component to view
	render() {
		var seconds = Math.floor(this.state.elapsedTime / 1000);
		return (
			<div className="stopwatch">
				<h2>Stopwatch</h2>
				<div className="stopwatch-time"> {seconds} </div>
				{this.state.running ? (
					<button onClick={this.onStop}>Stop</button>
				) : (
					<button onClick={this.onStart}>Start</button>
				)}
				<button onClick={this.onReset}>Reset</button>
			</div>
		);
	}
}
