import React, { Component } from 'react';
import DataTableRow from './DataTableRow.jsx';


class DataTable extends Component {
    mappingDataUser = () => this.props.userData.map((value, key)=>(
        <DataTableRow key={key} index={key+1} name={value.name} tel={value.tel} role={value.role}/>
    ))

    render() {
        return (
            <div className="col">
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
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DataTable;