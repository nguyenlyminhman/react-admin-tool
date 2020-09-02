import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
    }

    renderButton = () => {
        if (this.props.isShow) {
            return (
                <div className="btn btn-group col-12 text-right" >
                    <div name='1' className="btn  btn-info" onClick={() => this.props.toggleUserForm()}>Close</div>
                </div>
            )
        } else {
            return (
                <div className="btn btn-group col-12 text-right">
                    <div name='2' className="btn  btn-primary" onClick={() => this.props.toggleUserForm()}>Add New</div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn btn-group col-9">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Search..." />
                        <div className="btn btn-primary">Search</div>
                    </div>
                    <div className="btn btn-group col-3">
                        {this.renderButton()}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;