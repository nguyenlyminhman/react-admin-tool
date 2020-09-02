import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Fullname</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >1</td>
                            <td>Nguyen Van AABB</td>
                            <td>0989 123 456</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn btn-group">
                                    <div className="btn btn-warning">Edit</div>
                                    <div className="btn btn-danger">Delete</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td >2</td>
                            <td>Nguyen Van AABB</td>
                            <td>0989 123 456</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn btn-group">
                                    <div className="btn btn-warning">Edit</div>
                                    <div className="btn btn-danger">Delete</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td >3</td>
                            <td>Nguyen Van AABB</td>
                            <td>0989 123 456</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn btn-group">
                                    <div className="btn btn-warning">Edit</div>
                                    <div className="btn btn-danger">Delete</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td >4</td>
                            <td>Nguyen Van AABB</td>
                            <td>0989 123 456</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn btn-group">
                                    <div className="btn btn-warning">Edit</div>
                                    <div className="btn btn-danger">Delete</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DataTable;