import React from 'react';
import { Dataorders } from './order_data';
const style = {
    width: '50%',
    borderBottom: '1px solid grey'
    
}


export class Orders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 1
        }
        this.changeindex = this.changeindex.bind(this);
    }
    changeindex(i){
        this.setState({
            index: i 
        })
    }
    
    
    render() {
        
        
        return (

           <div>
               <div className="d-flex justify-content-around">
                   <div style = {style}  className = "text-center">
                        <h6 className="chch" onClick={(e) => this.changeindex(1)}>Pending</h6>
                   </div>
                    <div style={style} className="text-center">
                        <h6 className="chch" onClick={(e) => this.changeindex(2)}>Upcoming</h6>
                   </div>
                    <div style={style} className="text-center">
                        <h6 className="chch" onClick={(e) => this.changeindex(3)} >Past</h6>
                   </div>

               </div>
                <div>
                
                    <button type="button" class="btn btn-danger dropdown-toggle blue" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort </button>
                
                    <div class="dropdown-menu">
                        <ul>
                            <li className = "dropdown-item sort_list">By Price</li>
                            <li className = "dropdown-item sort_list">By Date</li>
                            <li className="dropdown-item sort_list">By Quantity</li>
                        </ul>
                        
                    </div>
                </div>
               <div>
                   <Dataorders index = {this.state.index} ></Dataorders>
               </div>
           </div>

        )
    }
}