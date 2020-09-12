import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import DataTable from './DataTable';
import NewUserForm from './NewUserForm';
import DataUser from '../common/data.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowNewUserForm: false,
      data: DataUser
    }
  }

  toggleUserForm = () => {
    this.setState({ isShowNewUserForm: !this.state.isShowNewUserForm })
  }

  // get search string from Search component
  getSearchValue = (value) => {
    console.log('Data from search: ', value.strSearch);
  }

  render() {
    return <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search 
              isShow={this.state.isShowNewUserForm} 
              toggleUserForm={() => this.toggleUserForm()} 
              getSearchValue = {(value)=> this.getSearchValue(value)} 
            />
            <DataTable userData={this.state.data} />
            <NewUserForm isShow={this.state.isShowNewUserForm} />
          </div>
        </div>
      </div>
    </div>
  }
}
export default App;
