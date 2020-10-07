import React from 'react';
import { Route } from "react-router-dom";

import AboutPage from './containers/AboutPage';
import Team from './containers/Developers';
import ServicesPage from './containers/Services';
import Home from './containers/HomePage';
import ContactPage from './components/ContactForm';

const BaseRouter = () => {
	return (
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/about/" component={AboutPage} />
				<Route exact path="/contact/" component={ContactPage} />
				<Route exact path="/developers/" component={Team} />
				<Route exact path="/services/" component={ServicesPage} />
			</div>
		)
}

export default BaseRouter;