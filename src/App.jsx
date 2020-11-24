import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import CreateNewOrder from './CreateNewOrder/CreateNewOrder'
import Cart from './Cart/Cart'
import CompletedOrders from './CompletedOrders/CompletedOrders'
import DeliveredOrders from './DeliveredOrders/DeliveredOrders'
import OpenOrders from './Open Orders/OpenOrders'
import NavBar from './GlobalComponents/NavBar' 

const App = () => (
	<Router>
		<div>
			<NavBar />
			<Switch>
				<Route path='/' exact component={ Home }/>
				<Route path='/CreateNewOrder' component={ CreateNewOrder }/>
				<Route path='/Cart' component={ Cart }/>
				<Route path='/OpenOrders' component={ OpenOrders }/>
				<Route path='/DeliveredOrders' component={ DeliveredOrders }/>
				<Route path='/CompletedOrders' component={ CompletedOrders }/>
			</Switch>
		</div>
	</Router>
)

export default App
