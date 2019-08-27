import React from 'react';
import { Foot } from './footer';
import { Topform } from './form_top';


export class First_comp extends React.Component{
    render(){
        return(
            <div>
                <Topform name = "Business Detail" complete = "25"></Topform>
                
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-sm-12" id = "first_box">
                            <form action="">
                                <div className="form-row justify-content-around">

                                    <div class="input-field  form-group col-md-3">
                                        <input id="entity" type="text" class="validate" />
                                        <label for="entity">Legal Entity Name</label>
                                    </div>

                                    <div class="input-field  form-group col-md-3">
                                        <input id="trade" type="text" class="validate" />
                                        <label for="trade">Trade Name</label>
                                    </div>
                                    <div class="input-field  form-group col-md-3">
                                        <input id="contact" type="text" class="validate" />
                                        <label for="contact">Contact Name</label>
                                    </div>
                                    
                                </div>
                                <div className="form-row justify-content-around">
                                    <div class="input-field  form-group col-md-3">
                                        <input id="gstin" type="text" class="validate" />
                                        <label for="gstin">GSTIN</label>
                                    </div>

                                    <div class="input-field  form-group col-md-3">
                                        <input id="phone" type="tel" class="validate" />
                                        <label for="phone">Phone</label>
                                    </div>

                                    <div class="input-field  form-group col-md-3">
                                        <input id="email" type="email" class="validate" />
                                        <label for="email">Email</label>
                                    </div>
                                    
                                </div>
                                <div className="form-row justify-content-around">
                                    <div class="input-field  form-group col-md-3">
                                        <input id="alt_no" type="tel" class="validate" />
                                        <label for="alt_no">Alternate No.</label>
                                    </div>
                                    <div class="input-field  form-group col-md-3">
                                        <input id="city" type="text" class="validate" />
                                        <label for="city">City</label>
                                    </div>  
                                    <div class="input-field  form-group col-md-3">
                                        <input id="pincode" type="text" class="validate" />
                                        <label for="pincode">Pincode</label>
                                    </div>

                                </div>
                                <div className="form-row justify-content-around">
                                    <div class="input-field  form-group col-md-3">
                                        <select>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <label>Country</label>
                                    </div>
                                    <div class="input-field  form-group col-md-3">
                                        <select>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <label>State</label>
                                    </div>
                                    <div class="input-field form-group col-md-3">
                                        <select multiple>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <label>Nature of Business</label>
                                    </div>
                                     
                                </div>
                                <div className="form-row justify-content-around">
                                    
                                    <div class="input-field  form-group col-md-8">
                                        <input id="brands" type="text" class="validate" />
                                        <label for="brands">Brands you are authorised to sell</label>
                                    </div>
                                    
                                    
                                </div>
                                <div className="form-row justify-content-end" id = "com_footer">
                                    <button class="btn waves-effect waves-light right blue white-text" type="submit" name="action">Save & Continue
                                    <i class="material-icons right">send</i>
                                    </button>
                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }
}