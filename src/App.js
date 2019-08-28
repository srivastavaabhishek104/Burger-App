
import React, { Component } from 'react';
import Layout from './components/Layout/layout'
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Checkout/Orders/Orders'
class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Switch>
						<Route path="/checkout" component={Checkout}/>
						<Route path="/orders" component={Orders}/>
						<Route path="/" component={BurgerBuilder} exact/>
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;