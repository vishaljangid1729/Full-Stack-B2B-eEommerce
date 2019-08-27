import React from 'react';

export class PastOrders extends React.Component{
    render(){
        return(
            <div class="col s12 m7">

                <div class="card horizontal">
                    <div class="card-content">
                        <div className="content-fluid">
                            <div className="row">
                                <div className="col-sm-3" > <img src="https://lorempixel.com/100/190/nature/6" alt="this is" className="img-fluid" /></div>
                                <div className="col-sm-9">
                                    <h6>Items name safas htr er dsf rtg </h6>
                                    <p>Quantity: 242</p>
                                    <h6>Price: 534/pack</h6>
                                    <br />
                                    <p>Product Detail:</p>
                                    <p><div className="1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptas ipsa, libero soluta nostrum quo labore alias nesciunt maiores, id voluptates consequuntur numquam, unde nihil natus perferendis illum! Dolor, quis.</div></p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Specification</td>
                                                <td>Detail</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>size </td>
                                                <td>39 mm</td>
                                            </tr>
                                            <tr>
                                                <td>height </td>
                                                <td>39 mm</td>
                                            </tr>
                                            <tr>
                                                <td>weight </td>
                                                <td>39 mm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div>

                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="red-text">
                                        Special Instruction
                                        </h5>
                                    <ol class="collection stretch blue-text" style={{ width: '100%' }}>
                                        <li class="collection-item">About Packing djswfi asd  weoh caodbni vweo vwief wef9nw  </li><br />
                                        <li class="collection-item">About quality erf we vw aefw f wef va wf </li><br />
                                        <li class="collection-item">any other informaiont</li><br />

                                    </ol>
                                </div>
                                <div className="col-sm-6" style={{ marginTop: '1%' }}>
                                    <h5 className="red-text">Shiped Date : 28-Aug-2019</h5>
                                    <h5><span className = "blue-text" >Payment Status: </span> <span className = "red-text" >Pending</span></h5>
                                    <h5><span className="blue-text" >Total Amount: </span> <span className="grey-text" >2453</span></h5>

                                    
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}