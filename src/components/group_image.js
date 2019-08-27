import React from 'react';
// import ReactDOM from 'react-dom';
import web from './../images/group_detail.svg';
import mobile from './../images/group_ver.svg';

export class Image extends React.Component{
    render(){
        var src = web;
        if(window.innerWidth < 420){
            src = mobile;
        }
        return (
            <img src = {src} alt = "group_image" className = "img-fluid" width= "100%" />
        )
    }
}