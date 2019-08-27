import React from 'react';

export class Feedback extends React.Component {
    render() {
        return (
            <div className="container-fluid">

                <div class="row">
                    <div class="col s12 m6">
                        <div class="card white darken-1">
                            <div class="card-content black-text">
                                <span class="card-title">Product Name</span>
                                <div className="row">
                                    <div className="col-sm-6">Date: 5-Aug-2019</div>
                                    <div className="col-sm-6">Order Id: 535234</div>
                                </div>
                                <br/>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus nobis rerum reprehenderit iste explicabo 
                                </p>
                            </div>
                            <div class="card-action">
                                <h6>
                                    Reply
                                </h6>
                                <form action="">
                                    <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                        <button class="waves-effect blue btn-small text-white waves-light btn">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}