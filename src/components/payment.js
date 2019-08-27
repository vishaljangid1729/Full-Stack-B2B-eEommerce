import React from 'react';

export class Payment extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <table className = "striped responsive-table">
                            <thead>
                                <tr>
                                    <td><h6>Order ID</h6></td>
                                    <td><h6>Date</h6></td>
                                    <td><h6>Product Name</h6></td>
                                    <td><h6>Quantity</h6></td>
                                    <td><h6>Total amount</h6></td>
                                    <td><h6>Payment status</h6></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>38729579</td>
                                    <td>2-Aug-2019</td>
                                    <td> no gr ainb</td>
                                    <td>5342</td>
                                    <td>353545</td>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <td>38729579</td>
                                    <td>2-Aug-2019</td>
                                    <td> no gr ainb</td>
                                    <td>5342</td>
                                    <td>353545</td>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <td>38729579</td>
                                    <td>2-Aug-2019</td>
                                    <td> no gr ainb</td>
                                    <td>5342</td>
                                    <td>353545</td>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <td>38729579</td>
                                    <td>2-Aug-2019</td>
                                    <td> no gr ainb</td>
                                    <td>5342</td>
                                    <td>353545</td>
                                    <td>pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <ul class="pagination">
                            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li class="active"><a href="#!">1</a></li>
                            <li ><a href="#!">2</a></li>
                            <li ><a href="#!">3</a></li>
                            <li ><a href="#!">4</a></li>
                            <li ><a href="#!">5</a></li>
                            <li ><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}