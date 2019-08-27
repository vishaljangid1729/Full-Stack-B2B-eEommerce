import React from 'react';
import {  ColumnChart} from 'react-chartkick'
import 'chart.js'

import M from 'materialize-css'










export class Report extends React.Component {
    run(){
        M.AutoInit();
    }
    
    render() {
        
        
       
        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="col-sm-8">
                        <div class="card white darken-1">
                            <div class="card-content black-text">
                                <span class="card-title">Sales snapshot</span>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td> <h6>Total order items</h6> </td>
                                                <td><h6>Total sales amount</h6></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className = "blue-text" > <h6>5534</h6></td>
                                                <td className="blue-text"><h6>3534</h6></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        {/* <LineChart data={{ "2017-05-13": 2, "2017-05-14": 5}} /> */}
                        
                        
                    </div>
                    <div class="col-sm-4">
                        <div class="card white darken-1">
                            <div class="card-content black-text">
                                <span class="card-title">Select item</span>
                                <div>
                                    <div>
                                        
                                        <select class="browser-default">
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Order items</td>
                                            <td>Total amount</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>5345</td>
                                            <td>5323426</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        


                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <ColumnChart className = "responsive" data={[["Sun", 32], ["Mon", 46], ["Tue", 28], ["sd", 21], ["safe", 24], ["sadfa", 76]]} />
                    </div>
                </div>
                {this.run}
            </div>
        )
    }
}