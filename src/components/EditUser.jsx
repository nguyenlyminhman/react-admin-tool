import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userInfo.id,
            name: this.props.userInfo.name,
            tel: this.props.userInfo.tel,
            role: this.props.userInfo.role,
        }
        console.log();
    }

    isChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value,
            id: this.props.userInfo.id
        })
    }

    sendUserInfo = () => {
        let info = {}
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.role = this.state.role;
        this.props.getUserInfor(info);
        this.props.cancelEditForm();
    }

    cancel = () => {
        this.props.cancelEditForm()
    }

    editUserForm = () => {
        if (this.props.isShowEditUserForm) {
            return (
                <div className="col"><form>
                    <div className="text-left">
                        <div className="card border-warning mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header text-center bg-warning">Edit User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input
                                        type="text" name='name'
                                        onChange={(event) => this.isChange(event)}
                                        className="form-control"
                                        placeholder="Username"
                                        defaultValue={this.props.userInfo.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text" name='tel'
                                        onChange={(event) => this.isChange(event)}
                                        className="form-control" placeholder="Tel"
                                        defaultValue={this.props.userInfo.tel}
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control"
                                        name='role'
                                        onChange={(event) => this.isChange(event)}
                                        defaultValue={this.props.userInfo.role}
                                    >
                                        <option value={"1"}>Default</option>
                                        <option value={"2"}>Administrator</option>
                                        <option value={"3"}>End-user</option>
                                    </select>
                                </div>
                                <div className="form-group text-right">
                                    <input type='reset' className="btn btn-block btn-warning" onClick={() => this.sendUserInfo()} value='Edited' />
                                    <input type='reset' className="btn btn-block btn-warning" onClick={() => this.cancel()} value='Cancel' />
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