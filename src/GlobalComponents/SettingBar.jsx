import React from 'react'
import { Link } from 'react-router-dom'


const SettingBar = () => (
	<div className="bar-zone" id="settings-bar" style={{ transition: 0.001 }}>
		<div className="settings-nav">
			<div className="main-nav">
				<svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="black" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
				</svg>
				<h4 style={{ margin: '1.6em 1em', fontSize: '1.5em', fontWeight: 200 }}>Client 1</h4>
			</div>
			<p>View Profile</p>
		</div>
		<hr />
		<ul>
			<li>Payment</li>
			<li>Settings</li>
			<li>Customer Service</li>
			<Link to='/DeliveredOrders'><li>Delivered Orders</li></Link>
			<li>Sign Out</li>
		</ul>
	</div>
)

export default SettingBar
