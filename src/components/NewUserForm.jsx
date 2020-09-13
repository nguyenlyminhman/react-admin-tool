import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tel: '',
            role: '1',
        }
    }

    isChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })

    }

    sendUserData = () => {
        let item = { id: '', name: '', tel: '', role: '' }
        item.id = uuidv4() + '';
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.role = this.state.role;
        this.props.getUserData(item)
    }

    newUserForm = () => {
        if (this.props.isShowNewUserForm) {
            return (
                <div className="col"><form>
                    <div className="text-left">

                        <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header">Add New User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" name='name' onChange={(event) => this.isChange(event)} className="form-control" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name='tel' onChange={(event) => this.isChange(event)} className="form-control" placeholder="Tel" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" value={this.state.role} name='role' onChange={(event) => this.isChange(event)}>
                                        <option value="1">Default</option>
                                        <option value="2">Administrator</option>
                                        <option value="3">End-user</option>
                                    </select>
                                </div>
                                <div className="form-group text-right">
                                    <input type='reset' className="btn btn-block btn-primary" onClick={() => this.sendUserData()} value='Add' />
                                </div>
                            </div>
                        </div>

                    </div></form>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.newUserForm()}
            </div>
        );
    }
}

export default NewUserForm;