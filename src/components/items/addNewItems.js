import React from 'react';


export class AddNewItems extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div class="col s12 m6">
                        <div class="card white darken-1">
                            <div class="card-content black-text">
                                <span class="card-title">Upload Your catalog </span>
                                <i className="material-icons grey-text large">add_box</i>
                                <form action="">
                                    <input type="file" name="" id="" required/>
                                    <button class="waves-effect blue btn-small text-white waves-light btn">Upload</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}