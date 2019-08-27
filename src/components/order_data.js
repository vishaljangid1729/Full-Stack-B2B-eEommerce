import React from 'react';
import { PendingOrders } from './pending_or';
import { UpcomingOrder } from './upcoming_or';
import { PastOrders } from './past_or';

export class Dataorders extends React.Component{
    render(){
        if(this.props.index === 1){
            return <PendingOrders></PendingOrders>
        }
        else if(this.props.index === 2){
            return <UpcomingOrder></UpcomingOrder>
        }
        else if(this.props.index === 3){
            return <PastOrders></PastOrders>
        }
    }
}