import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tel: '',
            role: '',
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
        let item = { id:'', name: '', tel: '', role: '' }
        // item.id = uuidv4()+'';
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.role = this.state.role;
        this.props.getUserEdit(item)
    }

    editUserForm = () => {
        if (this.props.isShow) {
            return (
                <div className="col"><form>
                    <div className="text-left">
                        
                            <div className="card border-warning mb-3" style={{ maxWidth: '18rem' }}>
                                <div className="card-header text-center bg-warning">Edit User</div>
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
                                        <input type='reset' className="btn btn-block btn-warning" onClick={() => this.sendUserData()} value='Edited'/>
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
                {this.editUserForm()}
            </div>
        );
    }
}
export default EditUser;