import React from 'react'
import { Link } from 'react-router-dom'

const SideNavBar = () => (
	<div className='bar-zone' id="side-bar">
		<ul>
			<Link to="/"><li>Home</li></Link>
			<Link to='/CreateNewOrder'><li>Create Order</li></Link>
			<Link to='/Cart'><li>Cart</li></Link>
			<Link to='/OpenOrders'><li>Open Orders</li></Link>
			<Link to='/DeliveredOrders'><li>Delivered Order</li></Link>
			<Link to='/CompletedOrders'><li>Completed Order</li></Link>
			<hr />
			<li>Setting</li>
			<li>Customer Service</li>
			<li>Sign Out</li>
		</ul>
	</div>
)

export default SideNavBar