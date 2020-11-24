import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

class Orderboxes extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }

    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div className="regular project-wrapper">
                <div onClick={() => { this.handleModal() }} style={{ fontSize: '0.85em', textAlign: 'center' }} className="box zone green box1" data-toggle="modal" data-target=".completed">
                    <p>Completed Orders</p>


                    <Modal show={this.state.show} onHide={() => { this.handleModal() }}>
                        <Modal.Header closeButton>

                            <Modal.Title>Completed orders</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal-body">
                                <div className="table-responsive-sm">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Job Number</th>
                                                <th scope="col">Project Title</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">000368</th>
                                                <td>Item 1</td>
                                                <td>8/1/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">000369</th>
                                                <td>item 2</td>
                                                <td>8/15/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">000370</th>
                                                <td>item 3</td>
                                                <td>9/4/2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                    <svg width="5em" height="2em" viewBox="0 0 16 16" className="bi bi-bag-check" fill="#FFFF3E " xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z" />
                        <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
                <div onClick={() => { this.handleModal() }} style={{ fontSize: '0.85em', textAlign: 'center' }} className="box zone purple box2" data-toggle="modal" data-target=".delivered">
                    <p>Delivered Orders</p>
                    <Modal show={this.state.show} onHide={() => { this.handleModal() }}>
                        <Modal.Header closeButton>

                            <Modal.Title>Delivered orders</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal-body">
                                <div className="table-responsive-sm">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Job Number</th>
                                                <th scope="col">Project Title</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">000368</th>
                                                <td>item 1</td>
                                                <td>8/1/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">000369</th>
                                                <td>item 2</td>
                                                <td>8/15/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">000370</th>
                                                <td>item 3</td>
                                                <td>9/4/2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                    <svg width="5em" height="2em" viewBox="0 0 16 16" className="bi bi-truck" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                </div>
                <div onClick={() => { this.handleModal() }} style={{ fontSize: '0.85em', textAlign: 'center' }} className="box zone yellow box3" data-toggle="modal" data-target=".open">
                    <p>Open Orders</p>
                    <Modal show={this.state.show} onHide={() => { this.handleModal() }}>
                        <Modal.Header closeButton>

                            <Modal.Title>Open Orders</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal-body">
                                <div className="table-responsive-sm">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Job Number</th>
                                                <th scope="col">Project Title</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">000368</th>
                                                <td>item 1</td>
                                                <td>8/1/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">000369</th>
                                                <td>item2</td>
                                                <td>8/15/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">000370</th>
                                                <td>item 3</td>
                                                <td>9/4/2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                    <svg width="5em" height="2em" viewBox="0 0 16 16" className="bi bi-folder2-open" fill="#EC0E0E " xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" />
                    </svg>
                </div>
                <div onClick={() => { this.handleModal() }} style={{ fontSize: '0.85em', textAlign: 'center' }} className="box zone darkred box4" data-toggle="modal" data-target=".cart">
                    <p>Cart</p>

                    <Modal show={this.state.show} onHide={() => { this.handleModal() }}>
                        <Modal.Header closeButton>

                            <Modal.Title>Cart</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal-body">
                                <div className="table-responsive-sm">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Job Number</th>
                                                <th scope="col">Project Title</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">000368</th>
                                                <td>item 1</td>
                                                <td>8/1/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">000369</th>
                                                <td>item 2</td>
                                                <td>8/15/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">000370</th>
                                                <td>item 3</td>
                                                <td>9/4/2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                    <svg width="5em" height="2em" viewBox="0 0 16 16" className="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                </div>
            </div>
        )
    }
}

export default Orderboxes


