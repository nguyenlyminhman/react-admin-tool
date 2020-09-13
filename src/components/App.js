import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import DataTable from './DataTable';
import NewUserForm from './NewUserForm';
import DataUser from '../common/data.json';
import EditUser from './EditUser';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowNewUserForm: false,
      isShowEditUserForm: false,
      data: DataUser,
      strSearch: '',
    }
  }

  toggleUserForm = () => {
    this.setState({ isShowNewUserForm: !this.state.isShowNewUserForm })
  }

  // get search string from Search component
  getSearchValue = (value) => {
    this.setState({ strSearch: value.strSearch });
  }

  getUserData = (value) => {
    let items = this.state.data; // assign old data to items
    items.push(value) // add new user data to old items
    this.setState({ // update state (new user data array)
      data: items
    })
}

  getUserEdit = (user) => {
    
  }

  toggleEditForm = () => {
    this.setState({ isShowEditUserForm: true })
  }

  render() {
    let resultSearch = []
    this.state.data.forEach((item, key) => {
      if (item.name.indexOf(this.state.strSearch) !== -1) {
        resultSearch.push(item)
      }
    })
    return <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search
              // toggleEditForm={()=>this.toggleEditForm()}
              toggleUserForm={() => this.toggleUserForm()}
              getSearchValue={(value) => this.getSearchValue(value)}
            />
            <DataTable showEditForm={()=>this.toggleEditForm()} getUserEdit={(user)=>this.getUserEdit(user)} userData={resultSearch} />
            <NewUserForm
              isShow={this.state.isShowNewUserForm}
              getUserData={(value) => { this.getUserData(value) }}
            />
            <EditUser isShow={this.state.isShowEditUserForm}/>
          </div>
        </div>
      </div>
    </div>
  }
}
export default App;
