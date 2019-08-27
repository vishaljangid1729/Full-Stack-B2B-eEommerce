import React from 'react';



export class Topform extends React.Component{
    render(){
        const progress = {
            width: `${this.props.complete}%`,
            backgroundColor: "#2680EB"
        }
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="grey-text center col-sm-12" >
                            <h4>Complete your profile to start selling</h4>
                            <button class="btn waves-effect waves-light right blue white-text" type="submit" name="action">Logout

                            </button>
                        </div>
                        
                    </div>
                    <div className="row justify-content-center">

                        <div class="progress col-sm-8" id = "test" >
                            <div class="determinate" style = {progress} ></div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="grey-text left col-sm-12" >
                                <h4>{this.props.name}</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        );
    }
}