import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn btn-group col-9">
                        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Search..." />
                        <div className="btn btn-primary">Search</div>
                    </div>
                    
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;