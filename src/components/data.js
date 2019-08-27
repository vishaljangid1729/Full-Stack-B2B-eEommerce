import React from 'react';
import { Dashboard } from './dashboard';
import { Orders } from './orders';
import { Report } from './report';
import { Feedback } from './feedback';
import { Contact } from './contact';
import { Items } from './items';
import { Payment } from './payment';


export class Data extends React.Component{
    render(){
        if(this.props.index === 1){
            return <Dashboard></Dashboard>
        }
        else if(this.props.index === 2){
            return <Orders></Orders>
        }
        else if(this.props.index === 3){
            return <Items></Items>
        }
        else if(this.props.index === 4){
            return <Report></Report>
        }
        else if (this.props.index === 5) {
           return <Feedback></Feedback>
        }
        else if (this.props.index === 6) {
            return <Contact></Contact>
        }
         else if (this.props.index === 7) {
            return <Payment></Payment>
        }
       
        else{
            return <Dashboard></Dashboard>
        }
    }
}