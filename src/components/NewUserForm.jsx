import React, { Component } from 'react';

class NewUserForm extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="btn btn-group col-12 text-right">
                    <div className="btn  btn-primary">Add New</div>
                </div>

                <div className="text-left">
                    <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">Add New User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option value="df">Default</option>
                                    <option value="ad">Administrator</option>
                                    <option value="eu">End-user</option>
                                </select>
                            </div>
                            <div className="form-group text-right">
                                <div className="btn btn-block btn-primary">Add</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn btn-group col-12 text-right">
                    <div className="btn  btn-info">Close</div>
                </div>
            </div>
        );
    }
}

export default NewUserForm;