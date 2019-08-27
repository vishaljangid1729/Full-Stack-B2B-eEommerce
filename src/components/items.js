import React from 'react';
import { ItemData } from './itemData';

const style = {
    width: '50%',
    borderBottom: '1px solid grey'

}


export class Items extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
        this.changeindex = this.changeindex.bind(this);
    }
    changeindex(i) {
        this.setState({
            index: i
        })
    }


    render() {


        return (

            <div>
                <div className="d-flex justify-content-around">
                    <div style={style} className="text-center">
                        <h6 className="chch" onClick={(e) => this.changeindex(1)}>Add New Items</h6>
                    </div>
                    <div style={style} className="text-center">
                        <h6 className="chch" onClick={(e) => this.changeindex(2)}>Current Items</h6>
                    </div>
                    

                </div>
              
                <div>
                    <ItemData index = {this.state.index} ></ItemData>
                </div>
            </div>

        )
    }
}