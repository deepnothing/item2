import React from 'react'

const Bottomtable = () => (
    <div className="bottombackground">
        <div className="orderContainer titleSection">
            <h1 style={{ fontSize: '3.2em', color: 'black' }}>Current Orders</h1>
        </div>
        <div className="regular blue" style={{ width: '80%', marginLeft: '10%', marginRight: '10%', borderRadius: '0.3em' }}>
            <table className="table table-hover" style={{ color: 'black', fontSize: '70%' }}>
                <thead>
                    <tr className="boldrow">
                        <th scope="col">Job Number</th>
                        <th scope="col">Project Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">000368</th>
                        <td>item 1</td>
                        <td>Completed</td>
                        <td>Aug. 1, 2020</td>
                    </tr>
                    <tr>
                        <th scope="row">000369</th>
                        <td>item 2</td>
                        <td>Completed</td>
                        <td>Aug. 15, 2020</td>
                    </tr>
                    <tr>
                        <td scope="row">000370</td>
                        <td>item 3</td>
                        <td>Completed</td>
                        <td>Sep. 4, 2020</td>
                    </tr>
                    <tr>
                        <td scope="row">000371</td>
                        <td>item 4</td>
                        <td>Delivered</td>
                        <td>Oct. 1, 2020</td>
                    </tr>
                    <tr>
                        <th scope="row">000372</th>
                        <td>item 5</td>
                        <td>Delivered</td>
                        <td>Oct. 5, 2020</td>
                    </tr>
                    <tr>
                        <td scope="row">000373</td>
                        <td>item 6</td>
                        <td>Open</td>
                        <td>Sep. 10, 2020</td>
                    </tr>
                    <tr>
                        <td scope="row">000374</td>
                        <td>item 7</td>
                        <td>Cart</td>
                        <td>Oct. 20, 2020</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br /><br /><br />
        <div className="regular blue">
            <p style={{ fontWeight: 200, fontSize: '0.5em', textAlign: 'center', color: 'black' }}>
                Copyright © 2020 SuperLing, LLC.<br />All rights reserved.
          </p>
        </div>
    </div>
)

export default Bottomtable

