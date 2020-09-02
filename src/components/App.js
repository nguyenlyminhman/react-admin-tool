import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import DataTable from './DataTable';
import NewUserForm from './NewUserForm';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowNewUserForm: false,
    }
  }

  toggleUserForm = () => {
    this.setState({ isShowNewUserForm: !this.state.isShowNewUserForm })
  }

  render() {
    return <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search isShow={this.state.isShowNewUserForm} toggleUserForm={()=>this.toggleUserForm()} />
            <DataTable />
            <NewUserForm isShow={this.state.isShowNewUserForm} />
          </div>
        </div>
      </div>
    </div>
  }
}
export default App;
