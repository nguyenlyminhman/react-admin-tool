import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: null
        }
    }

    //get value from search form
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

    //get value from text field
    isChange = (event) => {
        this.setState({
            searchValue : event.target.value
        })
    }

    //sent search string to App.js (Father)
    sendSearchValue = () => {
        //call from
        this.props.getSearchValue({strSearch: this.state.searchValue})
    }
    
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn btn-group col-9">
                        <input 
                            type="text" 
                            name="searchValue" 
                            onChange={(event)=>this.isChange(event)}
                            className="form-control" 
                            aria-describedby="helpId" 
                            placeholder="Search..." 
                        />
                        <div className="btn btn-primary" onClick={()=>this.sendSearchValue()}>Search</div>
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