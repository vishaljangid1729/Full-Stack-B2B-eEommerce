import React from 'react';


export class Signin extends React.Component{
    render(){
        return(
            
            <div id="modal1" className="modal modal-fixed-footer ">
                <form action="">
                    <div className="form-row">
                        {/* <div className="form-group col-md-12"><label htmlFor="">Email ID</label><input type="email" className="form-control" placeholder="Email ID" required /></div> */}
                        <div class="input-field col m12">
                            <input id="email" type="email" class="validate" />
                            <label for="email">Email ID</label>
                        </div>

                        

                    </div>
                    <div className="form-row">
                        {/* <div className="form-group col-md-12"><label htmlFor="">Password</label><input type="Password" className="form-control" placeholder="Password" required /></div> */}
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" />
                            <label for="password">Password</label>
                        </div>

                        
                    </div>
                    <div className="form-row justify-content-end">
                        <button class="btn waves-effect waves-light right blue white-text" type="submit" name="action">Login
                                    <i class="material-icons right">send</i>
                        </button>
                    </div>

                </form>
                
            </div>
        )
    }
}