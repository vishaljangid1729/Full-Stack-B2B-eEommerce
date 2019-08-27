import React from 'react';
import { Topform } from './form_top';
import { Foot } from './footer';

export class Second_comp extends React.Component{
    render(){
        return(
            <div>
                <Topform name = 'Bank Detail' complete = "50" ></Topform>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-sm-12" id="first_box">
                            <form action="">
                                <div className="form-row justify-content-around">

                                    <div class="input-field  form-group col-md-3">
                                        <input id="acc_name" type="text" class="validate" />
                                        <label for="acc_name">Account holder's name</label>
                                    </div>
                                    <div class="input-field  form-group col-md-3">
                                        <input id="acc_number" type="text" class="validate" />
                                        <label for="acc_number">Account number</label>
                                    </div>
                                    

                                </div>
                                <div className="form-row justify-content-around">

                                    <div class="input-field  form-group col-md-3">
                                        <input id="ifsc" type="text" class="validate" />
                                        <label for="ifsc">IFSC</label>
                                    </div>

                                    <div class="input-field  form-group col-md-3">
                                        <select>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <label>Bank</label>
                                    </div>
                                    

                                </div>
                                
                                <div className="form-row justify-content-end" id="com_footer">
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