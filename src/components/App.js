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
      data: DataUser,
      strSearch: '',
    }
  }

  toggleUserForm = () => {
    this.setState({ isShowNewUserForm: !this.state.isShowNewUserForm })
  }

  // get search string from Search component
  getSearchValue = (value) => {
    console.log(value);
    this.setState({ strSearch: value.strSearch });
  }

  render() {
    console.log('!', this.state);
    let resultSearch = []
    this.state.data.forEach((item, key)=>{
      if(item.name.indexOf(this.state.strSearch) !== -1){
        resultSearch.push(item)
      }
    })
    return <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search
              isShow={this.state.isShowNewUserForm}
              toggleUserForm={() => this.toggleUserForm()}
              getSearchValue={(value) => this.getSearchValue(value)}
            />
            <DataTable userData={resultSearch} />
            <NewUserForm isShow={this.state.isShowNewUserForm} />
          </div>
        </div>
      </div>
    </div>
  }
}
export default App;
