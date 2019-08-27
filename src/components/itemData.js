import React from 'react';
import { AddNewItems } from './items/addNewItems';
import { CurrItems } from './items/curr_items';

export class ItemData extends React.Component{
    render(){
        if(this.props.index === 1){
            return <AddNewItems></AddNewItems>
        }
        else if(this.props.index === 2){
            return <CurrItems></CurrItems>
        }
        else{
            return <AddNewItems>
                
            </AddNewItems>
        }
    }
}