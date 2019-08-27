import React from 'react';

export class CurrItems extends React.Component{
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
                                    
                                    <br />
                                    <p>Product Detail:</p>
                                    <p><div className="1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptas ipsa, libero soluta nostrum quo labore alias nesciunt maiores, id voluptates consequuntur numquam, unde nihil natus perferendis illum! Dolor, quis.</div></p>
                                    <table>
                                        <thead>
                                            <tr style={{ fontWeight: 'bold' }} >
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
                                <div className="col-sm-4">
                                    <h5>Pricing</h5>
                                    <table>
                                        <thead>
                                            <tr style = {{ fontWeight: 'bold' }} >
                                                <td>Quantity</td>
                                                <td>Price</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>100-200</td>
                                                <td>400/pack</td>
                                            </tr>
                                            <tr>
                                                <td>201-500</td>
                                                <td>350/pack</td>
                                            </tr>
                                            <tr>
                                                <td>500-1000</td>
                                                <td>300/pack</td>
                                            </tr>
                                            <tr>
                                                <td>1000-above</td>
                                                <td>300/pack</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className="col-sm-6" style={{ marginTop: '2%' }}>
                                    <div className = "row">
                                        <h5> <span className = "blue-text" >Supply capacity:</span>  5742 pack / month</h5>
                                        <h5> <span className="blue-text" >Current Stock:</span>  574</h5>
                                        
                                    </div>
                                    <div className="row justify-content-around" style = {{ marginTop: '5%' }}>
                                        <button class="waves-effect red btn-small text-white waves-light btn">Remove</button>
                                        <button class="waves-effect blue btn-small text-white waves-light btn">Edit</button>
                                        <button class="waves-effect blue btn-small text-white waves-light btn">Out of stock</button>


                                    </div>

                                   
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <form action="">
                                        <div className="form-group">
                                            <h6>Any Query send to us</h6>
                                            <textarea name="" id="" cols="30" rows="10">    </textarea>
                                            <button class="waves-effect blue btn-small text-white waves-light btn">Send</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}