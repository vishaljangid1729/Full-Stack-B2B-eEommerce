import React from 'react';
import { Signin } from './signin';
import { Foot } from './footer';



export class Signup extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-5" id = "singnup_image">
                        <img src= {require("../images/singup.svg")} alt="" srcset="" className = "img-fluid" />
                    </div>
                    <div className="col-sm-6" id = "signup_box">
                        <div className="row justify-content-end">
                            <a class="waves-effect waves-light btn modal-trigger blue white-text " href="#modal1">Login </a>
                            <Signin></Signin>
                        </div>
                        
                        <form>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="entity" type="text" class="validate"/>
                                    <label for="entity">Legal Entity Name</label>
                                </div>
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="contact" type="text" class="validate" />
                                    <label for="contact">Contact Name</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="input-field  form-group col-md-6">
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Category</label>
                                </div>
                                <div className="input-field  form-group col-md-6">
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Country</label>

                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="pincode" type="text" class="validate" />
                                    <label for="pincode">Pincode</label>
                                </div>

                                
                                <div className="input-field  form-group col-md-6">
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>State</label>

                                </div>
                            </div>
                            <div className="form-row">
                                {/* <div className="form-group col-md-6"><label htmlFor="">City</label><input type="text" className="form-control" placeholder = "City" required /></div>
                                <div className="form-group col-md-6"><label htmlFor="">Email ID</label><input type="email" className="form-control" placeholder = "Email ID" /></div> */}
                                <div class="input-field  form-group col-md-6">
                                    <input id="city" type="text" class="validate" />
                                    <label for="city">City</label>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email ID</label>
                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="password" type="password" class="validate" />
                                    <label for="password">Password</label>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="con_pass" type="password" class="validate" />
                                    <label for="con_pass">Confirm Password</label>
                                </div>
                            </div>
                            <div className="form-row">
                                {/* <div className="form-group col-md-6"><label htmlFor="">Mobile</label><input type="text" className="form-control" required placeholder = "Mobile" /></div>
                                <div className="form-group col-md-6"><label htmlFor="">GSTIN</label><input type="text" className="form-control" required placeholder = "GSTIN" /></div> */}
                                <div class="input-field  form-group col-md-6">
                                    <input id="mobile" type="tel" class="validate" />
                                    <label for="mobile">Mobile</label>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="gstin" type="text" class="validate" />
                                    <label for="gstin">GSTIN</label>
                                </div>
                            </div>
                            <div className="form-row justify-content-end">
                                <button class="btn waves-effect waves-light right blue white-text" type="submit" name="action">Submit
                                    <i class="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        );
    }
}
