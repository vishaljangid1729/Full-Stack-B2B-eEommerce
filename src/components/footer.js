import React from 'react';


export class Foot extends React.Component{
    render(){
        return(
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div class="col l6 s12">
                            <h5 class="blue-text">Contact Us</h5>
                            {/* <i class="material-icons">add</i> */}
                            <h6 className = "black-text">  <i class="material-icons grey-text">call</i> 8395859353</h6>
                            <h6 className="black-text"> <i class="material-icons grey-text">contact_mail</i> abieoibiodhf@dinv.ocm</h6>
                            <address class="black-text text-lighten-4">Swami bhaven soanoifn kgosjrg </address>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            
                            <ul>
                                <li><a class="blue-text" href="#!" >Terms of use</a></li>
                                <li><a class="blue-text" href="#!">Privacy policy</a></li>
                                <li><a class="blue-text" href="#!">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </footer>
        )
    }
}