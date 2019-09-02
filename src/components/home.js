import React from 'react';
import { Signin } from './signin';
import { Image } from './group_image';
import { Slider } from './slider';
import {Link } from 'react-router-dom';
import axios from 'axios';
function contact() {
    window.scrollTo(0, 88203);
}


export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            mobile: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }
    handleChange(event){
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }
    handleSumbit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:5000/", this.state)
        .then(res => {console.log(res)});

        this.setState({
            full_name: '',
            email: '',
            mobile: '',
            subject: '',
            message: ''
        })
        // alert("Message send successfully");
    
        
    }



    render(){
        
        // console.log(this.state.apiResponse);
        const {full_name, email, mobile, subject, message} = this.state;

        return(
            <div className="container-fluid">
                


                <div className='row'>
                    <div className="col-sm-12">
                        <button type="button" class="btn waves-effect waves-light hide-on-small-only" id="contact_us" onClick={contact} >Contact Us</button>
                    </div>
                    <div className="col-sm-8">
                        <h3 id="trust">Growing a family of Trust</h3>
                        <img src={require("../../src/images/undraw_business_deal_cpi9.svg")} alt="Welcome logo" className="img-fluid mx-auto d-block" />

                    </div>
                    <div className="col-sm-4 justify-content-around" >

                        <div id="side_box">
                            <h2 id="family_quote">Let's Build Our Family</h2>
                            <div id="button_div" className = "row justify-content-around">
                                <div className="col">
                                    <a class="waves-effect waves-light btn modal-trigger grey white-text " href="#modal1">Login </a>
                                    <Signin></Signin>

                                </div>
                                <div className="col">
                                    <Link to="/signup">
                                        <button type="button" className="btn waves-effect waves-light blue white-text">Register</button>

                                    </Link>
                                </div>
                            

                                

                                


                            </div>

                        </div>


                    </div>

                </div>
                <div className="container-fluid">
                    <h1 id="business">Grow your business with us</h1>
                </div>

                <div className="container-fluid" id="images_box">
                    <div>
                        {/* <img src = {require("../src/images/group_detail.svg")} alt ="our" className = "img-fluid" id = "our_detail"/> */}
                        <Image></Image>

                    </div>


                </div>
                <div id="benefit_title">
                    <h1>Benefits of Business </h1>
                    <h2>With ABCD</h2>
                </div>

                <div className="container-fluid ">
                    <div className="row justify-content-around">
                        <div className="col-sm-4 box">
                            <p className="benefit_text">thsi thsi tis  bgtgiy ghoh</p>
                        </div>
                        <div className="col-sm-4 box">
                            <p className="benefit_text" >hio ghiou gheur jbia wioe</p>
                        </div>
                    </div>
                    <div className="row justify-content-around" >
                        <div className="col-sm-4 box">
                            <p className="benefit_text">thsi thsi tis  bgtgiy ghoh</p>
                        </div>
                        <div className="col-sm-4 box">
                            <p className="benefit_text" >hio ghiou gheur jbia wioe</p>
                        </div>
                    </div>

                </div>
                <div id="slider" >
                    <Slider></Slider>
                </div>

                <div id="footer_box">

                    <footer class="page-footer" id="footer">
                        <div className="container-fluid">
                            <div className="row justify-content-around" >
                                <div className="col-sm-6">
                                    <img src={require("./../images/hand.svg")} alt="" srcset="" className="img-fluid" />

                                </div>
                                <div className="col-sm-4 " id="message_box">
                                    <h3 id="get_in">GET IN TOUCH</h3>
                                    <form onSubmit = {this.handleSumbit}  >
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input value = {full_name} onChange = {this.handleChange} placeholder="Full Name" name = "full_name" type="text" class="validate materialize-text " />
                                                <label for="first_name2">FUll Name</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input value={email} onChange={this.handleChange} placeholder="Email" name="email" type="email" class="validate" />
                                                <label for="first_name2">Email</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input value={mobile} onChange={this.handleChange} placeholder="Moblie No." name="mobile" type="tel" class="validate" />
                                                <label for="first_name2">Moblie No.</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input value={subject} onChange={this.handleChange} placeholder="Subject" name="subject" type="text" class="validate" />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <textarea value={message} onChange={this.handleChange} id="message_text" placeholder="Message" name = "message" class="materialize-textarea" ></textarea>
                                                <label for="icon_prefix2">Message</label>
                                            </div>
                                        </div>

                                        <button class="btn waves-effect waves-light" type="submit" id="submit" name="action">Send
                <i class="material-icons right">send</i>
                                        </button>

                                    </form>




                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col l6 s12">
                                    <h5 class="white-text">Footer Content</h5>
                                    <p class="grey-text text-lighten-4">You can use rows and columns h.</p>
                                </div>
                                <div class="col l4 offset-l2 s12">

                                    <ul>
                                        <li><a class="grey-text text-lighten-3" href="#!"><img src={require('../../src/images/twitter.svg')} height="44px" alt="twitter" /></a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!"><img src={require('../../src/images/facebook.svg')} height="44px" alt="facebook" /></a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!"><img src={require('../../src/images/linkedin.svg')} height="44px" alt="linkedin" /></a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!"><img src={require('../../src/images/instagram.svg')} height="44px" alt="instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright">
                            <div class="container">
                                © 2019 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">TERMS OF USE</a>

                            </div>
                        </div>
                    </footer>

                </div>


            </div>

        )
    }
}