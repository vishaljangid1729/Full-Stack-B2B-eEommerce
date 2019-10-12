import React from 'react';
import { Foot } from './footer';
import { Topform } from './form_top';
import axios from 'axios';



export class First_comp extends React.Component{
    constructor(props){
        super(props);
        // this.props.location.state.ABC from signup form state
        this.state = {
            entity: this.props.location.state.entity,
            trade: '',
            contact_name: this.props.location.state.name,
            gstin: this.props.location.state.gstin,
            phone: this.props.location.state.phone,
            email: this.props.location.state.email,
            alt_no: '',
            city: this.props.location.state.city,
            pincode: this.props.location.state.pincode,
            country: '',
            state: '',
            nature_business: [],
            brands: []
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSumbit(event){
        event.preventDefault();
       
        console.log(this.state);
    }
    componentDidMount(){
        axios.get('http://localhost:5000/comp_first')
        .then(res => {
            console.log(res);
        })

    }

    render(){
        const {entity, trade, contact_name, gstin, phone, email, alt_no, city, pincode, country, state, nature_business, brands} = this.state;
        console.log(this.props.location.state);
        return(
            <div>
                <Topform name = "Business Detail" complete = "25"></Topform>
                
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-sm-12" id = "first_box">
                            <form onSubmit = {this.handleSumbit}>
                                <div className="form-row justify-content-around">

                                    <div class="input-field  form-group col-md-3">
                                        <input id="entity" name = "entity" value = {entity} required onChange = {this.handleChange} type="text" class="validate" />
                                        <label for="entity" className = "active">Legal Entity Name</label>
                                    </div>

                                    <div class="input-field  form-group col-md-3">
                                        <input id="trade" value = {trade} onChange = {this.handleChange} name = "trade" required type="text" class="validate" />
                                        <label for="trade" className = "active keyboard-foucsed">Trade Name</label>
                                    </div>
                                    <div class="input-field  form-group col-md-3">
                                        <input id="contact" value = {contact_name} onChange = {this.handleChange} name = "contact_name" required type="text" class="validate" />
                                        <label for="contact">Contact Name</label>
                                    </div>
                                    
                                </div>
                                <div className="form-row justify-content-around">
                                    <div class="input-field  form-group col-md-3">
                                        <input id="gstin" value = {gstin} onChange = {this.handleChange} name = "gstin" required type="text" class="validate" />
                                        <label for="gstin">GSTIN</label>
                                    </div>

                                    <div class="input-field  form-group col-md-3">
                                        <input id="phone" value = {phone} onChange = {this.handleChange} name = "phone"  type="tel" class="validate" />
                                        <label for="phone">Phone</label>
                                    </div>

                                    <div class="input-field  form-group col-md-3">
                                        <input id="email" value = {email} onChange = {this.handleChange} name = "email" required type="email" class="validate" />
                                        <label for="email">Email</label>
                                    </div>
                                    
                                </div>
                                <div className="form-row justify-content-around">
                                    <div class="input-field  form-group col-md-3">
                                        <input id="alt_no" value = {alt_no} onChange = {this.handleChange} name = "alt_no" required type="tel" class="validate" />
                                        <label for="alt_no">Alternate No.</label>
                                    </div>
                                    <div class="input-field  form-group col-md-3">
                                        <input id="city" name = "city" value ={city} onChange = {this.handleChange} required type="text" class="validate" />
                                        <label for="city">City</label>
                                    </div>  
                                    <div class="input-field  form-group col-md-3">
                                        <input id="pincode" value = {pincode} onChange = {this.handleChange} name = "pincode" required type="text" class="validate" />
                                        <label for="pincode">Pincode</label>
                                    </div>
                                </div>
                                <div className="form-row justify-content-around">
                                    <div class="input-field  form-group col-md-3">
                                        <select name = "country" required value = {country} onChange = {this.handleChange} >
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <label>Country</label>
                                    </div>
                                    <div class="input-field  form-group col-md-3">
                                        <select name = "state" required value = {state} onChange = {this.handleChange}>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <label>State</label>
                                    </div>
                                    <div class="input-field form-group col-md-3">
                                        <select multiple name = "nature_business" required value = {nature_business} onChange = {this.handleChange}>
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
                                        <input id="brands" type="text" value = {brands} onChange = {this.handleChange} name = "brands" required class="validate" />
                                        <label for="brands">Brands you are authorised to sell</label>
                                    </div> 
                                </div>
                                <div className="form-row justify-content-end" id = "com_footer">
                                    <button class="btn waves-effect waves-light right blue white-text" type="submit" >Save & Continue
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