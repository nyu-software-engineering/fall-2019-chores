import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import homeRoutes from '../routes';
import households from '../household';

import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fixedClasses: 'dropdown show-dropdown open',
			households: [],
			id: 0,
			message: null,
			intervalIsSet: false,
			idToDelete: null,
			idToUpdate: null,
			objectToUpdate: null,
		};
	}

	getRoutes = routes => {
		return routes.map((prop, key) => {
			console.log(prop);
			console.log(key);
			if (prop.layout === '/app') {
				return (
					<Route
						path={prop.path}
						render={props => <prop.component {...props} />}
						key={key}
					/>
				);
			} else {
				return null;
			}
		});
	};

	handleFixedClick = () => {
		if (this.state.fixedClasses === 'dropdown') {
			this.setState({ fixedClasses: 'dropdown show-dropdown open' });
		} else {
			this.setState({ fixedClasses: 'dropdown' });
		}
	};

	componentDidMount() {
		this.getDataFromDB();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getDataFromDB, 1000);
			this.setState({ intervalIsSet: interval });
		}
	}

	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	componentDidUpdate(e) {
		if (
			window.innerWidth < 993 &&
			e.history.location.pathname !== e.location.pathname &&
			document.documentElement.className.indexOf('nav-open') !== -1
		) {
			document.documentElement.classList.toggle('nav-open');
		}
		if (e.history.action === 'PUSH') {
			document.documentElement.scrollTop = 0;
			document.scrollingElement.scrollTop = 0;
			this.refs.mainPanel.scrollTop = 0;
		}
	}

	getDataFromDB = () => {
		fetch('http://localhost:3001/api/household')
			.then(data => data.json())
			.then(res => this.setState({ households: res.data }));
	};

	// onChange={e => this.setState({ message: e.target.value })}
	// onClick={() => this.putDataToDB(this.state.message)}
	putDataToDB = message => {
		let currentIds = this.state.data.map(data => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}

		axios.post('http://localhost:3001/api/household', {
			id: idToBeAdded,
		});
	};

	// onChange={e => this.setState({ idToDelete: e.target.value })}
	// onClick={() => this.deleteFromDB(this.state.idToDelete)}
	deleteFromDB = idTodelete => {
		parseInt(idTodelete);
		let objIdToDelete = null;
		this.state.data.forEach(dat => {
			if (dat.id == idTodelete) {
				objIdToDelete = dat._id;
			}
		});

		axios.delete('http://localhost:3001/api/household', {
			households: {
				id: objIdToDelete,
			},
		});
	};

	// onChange={e => this.setState({ idToUpdate: e.target.value })}
	// onChange={e => this.setState({ updateToApply: e.target.value })}
	// onClick={() => this.updateDB(this.state.idToUpdate,this.state.updateToApply)}
	updateDB = (idToUpdate, updateToApply) => {
		let objIdToUpdate = null;
		parseInt(idToUpdate);
		this.state.data.forEach(dat => {
			if (dat.id == idToUpdate) {
				objIdToUpdate = dat._id;
			}
		});

		axios.post('http://localhost:3001/api/household', {
			id: objIdToUpdate,
			update: { message: updateToApply },
		});
	};

	render() {
		console.log('props:', this.props);

		return (
			<div className="wrapper">
				<Sidebar {...this.props} routes={homeRoutes} />
				<div id="main-panel" className="main-panel" ref="mainPanel">
					<Switch>{this.getRoutes(homeRoutes)}</Switch>
					<Footer />
				</div>
			</div>
		);
	}
}
