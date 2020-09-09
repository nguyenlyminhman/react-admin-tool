import React, { Component } from 'react';

class DataTableRow extends Component {
    showRole = (val) => {
        if (val === "2") {
            return "Admin"
        }
        else if (val == "3") {
            return "End User"
        }
        return "Default"
    }
    render() {
        return (
            <tr>
                <td >{this.props.index}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.showRole(this.props.role)}</td>
                <td>
                    <div className="btn btn-group">
                        <div className="btn btn-warning">Edit</div>
                        <div className="btn btn-danger">Delete</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default DataTableRow;