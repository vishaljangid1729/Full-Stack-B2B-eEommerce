import React from 'react';
import { Signin } from './signin';
import { Foot } from './footer';
import axios from 'axios';
import { Redirect } from 'react-router-dom'




export class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            entity: '',
            contact_name: '',
            category: '',
            country: '',
            pincode: '',
            state: '',
            city: '',
            email: '',
            password: '',
            con_pass: '' ,
            mobile: '',
            gstin: '',
            pincodeError: '',
            passwordError: '',
            mobileError: '',
            gstinError: '',
            sumbit: false, 
            errorMessage: 'vishal',
            errorStatus: true
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    async validate(){
        // pincode validation
        // console.log("this is checking");
        if (this.state.pincode.match(/^[0-9]+$/) === null || this.state.pincode.length !==6){
            this.setState({pincodeError: "Invalid pincode"});
        }
        else{
            this.setState({pincodeError: ""});
        }
        // mobile validation

        if (this.state.mobile.match(/^[0-9]+$/) === null || this.state.mobile.length !== 10) {
            this.setState({mobileError: "Invalid mobile number"});
        }
        else {
            this.setState({ mobileError: "" });
        }

        // password validation
        if(this.state.password !== this.state.con_pass){
            this.setState({passwordError: "Password don't match"}); 
        }
        else{
            this.setState({passwordError: ""});
        }

        // GSTIN validation
        if(this.state.gstin.length !== 15){
            this.setState({gstinError: "Invalid gstin"});
        }
        else{
            this.setState({gstinError: ""});
        }
        if(this.state.gstinError === "" && this.state.pincodeError === "" && this.state.mobileError === "" && this.state.passwordError === ""){
            return true; 
        }
        else{
            return false;
        }
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    async handleSubmit(event){
        // const validation = this.validate();
        console.log("thisl is checking now");
        event.preventDefault();
        // console.log(this.state);
        await this.validate();
        if(await this.validate()){
            console.log(this.validate());
            axios.post("http://localhost:5000/signup", this.state)
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    this.setState({sumbit: true});
                }
                else if(res.status === 204){
                    this.setState({
                        errorMessage: "Account already exist.",
                        errorStatus: true
                    });
                }
                else{
                    this.setState({
                        errorMessage: "Try after some time.", 
                        errorStatus: true
                    })
                }
                
            });
            console.log("Data send");
            

        }
        else{
            console.log("error in form so, it can't be sned data");
        }

    }

    render(){
        const {entity, contact_name, category, country, pincode, state, city, email, password, con_pass, mobile, gstin} = this.state;
        const states_list = ['Andhra Pradesh', 'Arunachal Pradesh','Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Jammu and Kashmir', 'Jharkhand'
        ,'Karnataka', 'Kerala', 'Madhya Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Panjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'Wesh Bengal', 'Andaman and Nicobar', 'Chandigargh', 'Dadra N H', 'Delhi', 'Lakshadweep', 'Pondicherry' ]

        // Redirect after success
        if(this.state.sumbit){
            return <Redirect to={{ pathname: "/company_detail_first", state: {
                entity: this.state.entity,
                name: this.state.contact_name,
                gstin: this.state.gstin,
                email: this.state.email,
                phone: this.state.mobile
            }}}  ></Redirect>
        }
        return(
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-5" id = "singnup_image">
                        <img src= {require("../images/singup.svg")} alt="" srcset="" className = "img-fluid" />
                    </div>
                    <div className="col-sm-6" id = "signup_box">
                        <div className="row justify-content-end">
                            <a class=" waves-light btn modal-trigger blue white-text " href="#modal1">Login </a>
                            <Signin></Signin>
                        </div>
                        {this.state.errorStatus ? <h6>{this.state.errorMessage}</h6>: <p></p>}
                        
                        <form onSubmit = {this.handleSubmit}>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="entity" type="text" onChange = {this.handleChange} value = {entity}  name = "entity" required class="validate"/>
                                    <label for="entity">Legal Entity Name</label>
                                </div>
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="contact" type="text" onChange={this.handleChange} value= {contact_name} name = "contact_name" required class="validate" />
                                    <label for="contact">Contact Name</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="input-field  form-group col-md-6">
                                    <select name="category"  onChange={this.handleChange} value= {category} >
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Category</label>
                                </div>
                                <div className="input-field  form-group col-md-6">
                                    <select name="country"  onChange={this.handleChange} value= {country} >
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">India</option>
                                    </select>
                                    <label>Country</label>

                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="pincode" name="pincode" onChange={this.handleChange} value = {pincode} required type="text" class="validate" />
                                    <label for="pincode">Pincode</label>
                                    <span className="helper-text"> {this.state.pincodeError} </span>
                                </div>

                                
                                <div className="input-field  form-group col-md-6">
                                    <select name="state"  onChange={this.handleChange} value={state} >
                                        <option value="" disabled selected>Choose your option</option>
                                        {states_list.map((item, i) => 
                                            <option value= {i}> {item}</option>
                                            )}
                                    </select>
                                    <label>State</label>

                                </div>
                            </div>
                            <div className="form-row">
                               
                                <div class="input-field  form-group col-md-6">
                                    <input id="city" type="text" name="city" required class="validate" onChange={this.handleChange} value= {city} />
                                    <label for="city">City</label>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="email" name="email" required type="email" class="validate" onChange={this.handleChange} value= {email} />
                                    <label for="email">Email ID</label>
                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="password" type="password" name="password" required class="validate" onChange={this.handleChange} value= {password} />
                                    <label for="password">Password</label>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="con_pass" type="password" name="con_pass" required class="validate" onChange={this.handleChange} value={con_pass} />
                                    <label for="con_pass">Confirm Password</label>
                                    <span className="helper-text"> {this.state.passwordError} </span>
                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div class="input-field  form-group col-md-6">
                                    <input id="mobile" name="mobile" onChange={this.handleChange} value={mobile} required type="tel" class="validate" />
                                    <label for="mobile">Mobile</label>
                                    <span className = "helper-text"> {this.state.mobileError} </span>
                                </div>

                                <div class="input-field  form-group col-md-6">
                                    <input id="gstin" name="gstin" onChange={this.handleChange} value={gstin} required type="text" class="validate" />
                                    <label for="gstin">GSTIN</label>
                                    <span class="helper-text">{this.state.gstinError}</span>
                                </div>
                            </div>
                            <div className="form-row justify-content-end">
                                <button class="btn  right blue white-text" type="submit" name="action">Submit
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
