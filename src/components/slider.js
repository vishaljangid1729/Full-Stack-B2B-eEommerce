import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import img1 from './../images/img1.jpg';
import img2 from './../images/img2.jpg';
import img3 from './../images/img3.jpg';
import './../slider.css';


export class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageList: [img1, img2, img3],
            index: 0
        }
        this.pre_image = this.pre_image.bind(this);
        this.next_image = this.next_image.bind(this);
    }
    pre_image(){
        if(this.state.index === 0){
            this.setState({
                
                index: 2
            });
        }
        else{
            this.setState({
                
                index: this.state.index -1
            })
        }
    }
    next_image(){
        if (this.state.index === 2) {
            this.setState({
                
                index: 0
            });
        }
        else {
            this.setState({
                
                index: this.state.index + 1
            })
        }

    }
    render(){
        return(
            <div>
                <div className = "container-fluid">
                    <div className="row">
                        <img src={this.state.imageList[this.state.index]} alt="" srcset="" className="img-fluid rounded mx-auto d-block" width = "90%"></img>
                    </div>
                    <div className="row justify-content-center">
                        <i class="material-icons left medium" onClick = {this.pre_image}>chevron_left</i>
                        <i class="material-icons right medium" onClick = {this.next_image}>chevron_right</i>
                    </div>
                    
                    
                       
                    
                </div>

            </div>
        );
    }
}