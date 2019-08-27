import React from 'react';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className  = "container-fluid">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="card white darken-1">
                            <div class="card-content black-text">
                                <span class="card-title">Upload new items</span>
                                <div>
                                    <form action="">
                                        <div>

                                            <select class="browser-default">
                                                <option value="" disabled selected>Choose your option</option>
                                                <option value="1">Option 1</option>
                                                <option value="2">Option 2</option>
                                                <option value="3">Option 3</option>
                                            </select>
                                        </div>
                                        <div className = "input-field" >
                                            <button class="btn waves-effect waves-light right blue white-text" type="button" name="action">Proceed
                                    
                                            </button>

                                        </div>
                                    </form>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card white darken-1">
                            <div class="card-content black-text">
                                <span class="card-title">Total Selling</span>
                                <h3 id = "total_selling">$5343</h3>
                            </div>
                            <div class="card-action">
                                <a href="!#" className = "black-text">Payment History</a>
                                
                            </div>
                        </div>
                    </div>
                    <div className = "col s10 m8">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className = "card white darker-1" >
                            <div className="card-content">
                                <h5>Delivery Pending</h5>
                                <table className= "striped responsive-table" >
                                    <thead>
                                        <tr>
                                            <td>Products Name</td>
                                            <td>Quantity</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>xuyx e acwo adca </td>
                                            <td>234</td>
                                        </tr>
                                        <tr>
                                            <td>xuyx e acwo adca </td>
                                            <td>234</td>
                                        </tr>
                                        <tr>
                                            <td>xuyx e acwo adca </td>
                                            <td>234</td>
                                        </tr>
                                        
                                        
                                       
                                    </tbody>
                                </table>
                            </div>
                            

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card white darker-1" >
                            <div className="card-content">
                                <h5>New/Upcoming Orders</h5>
                                <table className="striped center " >
                                    <thead>
                                        <tr>
                                            <td>Products Name</td>
                                            <td>Quantity</td>
                                            <td>Accpet/Decline</td>
                                        </tr>
                                        
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>xuyx e acwo adca </td>
                                            <td>234</td>
                                            <td>
                                                <div className="row justify-content-around">
                                                    <button class="waves-effect blue btn-small text-white waves-light btn">Accept</button>
                                                    <button class="waves-effect red btn-small text-white waves-light btn">Decline</button>

                                                </div>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>xuyx e acwo adca </td>
                                            <td>234</td>
                                            <td>
                                                <div className="row justify-content-around">
                                                    <button class="waves-effect blue btn-small text-white waves-light btn">Accept</button>
                                                    <button class="waves-effect red btn-small text-white waves-light btn">Decline</button>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>xuyx e acwo adca </td>
                                            <td>234</td>
                                            <td>
                                                <div className="row justify-content-around">
                                                    <button class="waves-effect blue btn-small text-white waves-light btn">Accept</button>
                                                    <button class="waves-effect red btn-small text-white waves-light btn">Decline</button>
                                                    

                                                </div>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}