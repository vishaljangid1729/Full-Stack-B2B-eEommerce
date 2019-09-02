import React from 'react';
import { Topform } from './form_top';
import { Foot } from './footer';

export class Second_comp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            acc_hol_name: '',
            acc_no: '',
            ifsc: '',
            bank: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        const {acc_hol_name, acc_no, ifsc, bank} = this.state;
        return(
            <div>
                <Topform name = 'Bank Detail' complete = "50" ></Topform>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-sm-12" id="first_box">
                            <form onSubmit = {this.handleSubmit}>
                                <div className="form-row justify-content-around">

                                    <div class="input-field  form-group col-md-3">
                                        <input id="acc_name" name = "acc_hol_name" required onChange = {this.handleChange} value = {acc_hol_name} type="text" class="validate" />
                                        <label for="acc_name">Account holder's name</label>
                                    </div>
                                    <div class="input-field  form-group col-md-3">
                                        <input id="acc_number" name = "acc_no" onChange = {this.handleChange} value = {acc_no} required type="text" class="validate" />
                                        <label for="acc_number">Account number</label>
                                    </div>
                                    

                                </div>
                                <div className="form-row justify-content-around">

                                    <div class="input-field  form-group col-md-3">
                                        <input id="ifsc" name = "ifsc" value = {ifsc} onChange ={this.handleChange} required type="text" class="validate" />
                                        <label for="ifsc">IFSC</label>
                                    </div>

                                    <div class="input-field  form-group col-md-3">
                                        <select name ="bank" required onChange = {this.handleChange} value = {bank}>
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