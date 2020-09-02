import React, { Component } from 'react';

class NewUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowForm: false,
        }
    }

    toggleShowForm = () => {
        this.setState({
            isShowForm : !this.state.isShowForm
        })
    }

    RenderButton = () => {
        if (this.state.isShowForm) {
            return (
                <div className="btn btn-group col-12 text-right" >
                    <div name='1' className="btn  btn-info" onClick={() => this.toggleShowForm()}>Close</div>
                </div>
            )
        } else {
            return (
                <div className="btn btn-group col-12 text-right">
                    <div name='2' className="btn  btn-primary" onClick={() => this.toggleShowForm()}>Add New</div>
                </div>
            )
        }
    }

    NewUserForm = () => {
        if (this.state.isShowForm) {
            return (
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
            )
        }
    }

    render() {
        return (
            <div className="col-3">
                {this.RenderButton()}
                {this.NewUserForm()}
            </div>
        );
    }
}

export default NewUserForm;