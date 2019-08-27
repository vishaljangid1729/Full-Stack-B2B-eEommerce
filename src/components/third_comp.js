import React from 'react';
import { Topform } from './form_top';
import { Foot } from './footer';

export class Third_comp extends React.Component{
    render(){
        return (
            <div>
                <Topform name='Upload Documents' complete="75" ></Topform>
                
                <div className="container-fluid" id = "third_comp">

                    <div className="row">
                        <div className="col-sm-12" id="first_box">
                            <form action="">
                                <div className="form-row justify-content-around">
                                    <div class="file-field input-field">
                                        <div class="btn">
                                            <span>GSTIN</span>
                                            
                                            <input type="file"/>
                                        </div>
                                        <div class="file-path-wrapper">
                                                <input class="file-path validate" type="text"/>
                                                
                                        </div>
                                    </div>

                                   


                                </div>
                                <div className="form-row justify-content-around">
                                    <div class="file-field input-field">
                                        <div class="btn">
                                            <span>Bank Detail proof</span>

                                            <input type="file" />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" />

                                        </div>
                                    </div>
                                </div>
                                <div className="form-row justify-content-around">
                                    <div class="file-field input-field">
                                        <div class="btn">
                                            <span>Company Logo</span>

                                            <input type="file" />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" />

                                        </div>
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

