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
      userInfo: {}
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
    this.setState({
      userInfo: user
    })
  }

  getUserInfor = (user) => {
    this.state.data.forEach((item, key) => {
      if (item.id === user.id) {
        if (user.name !== undefined)
          item.name = user.name;
        if (user.tel !== undefined)
          item.tel = user.tel;
        if (user.role !== undefined)
          item.role = user.role;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data)); 
  }

  toggleEditForm = () => {
    this.setState({ isShowEditUserForm: true })
  }

  cancelEditForm = () => {
    this.setState({ isShowEditUserForm: false })
  }
  componentWillMount(){
    if(localStorage.getItem('userData') === null){
        localStorage.setItem('userData', JSON.stringify(DataUser)); 
    } else {
      let items = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data: items
      })
    }
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
              isShowNewUserForm={this.state.isShowNewUserForm}
              toggleUserForm={() => this.toggleUserForm()}
              getSearchValue={(value) => this.getSearchValue(value)}
            />
            <DataTable showEditForm={() => this.toggleEditForm()} getUserEdit={(user) => this.getUserEdit(user)} userData={resultSearch} />
            <NewUserForm
              isShowNewUserForm={this.state.isShowNewUserForm}
              getUserData={(value) => { this.getUserData(value) }}
            />
            <EditUser
              getUserInfor={(user) => this.getUserInfor(user)}
              cancelEditForm={() => this.cancelEditForm()}
              userInfo={this.state.userInfo}
              isShowEditUserForm={this.state.isShowEditUserForm}
            />
          </div>
        </div>
      </div>
    </div>
  }
}
export default App;
