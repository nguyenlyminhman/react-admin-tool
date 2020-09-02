import React from 'react';
import Header from './Header';
import Search from './Search';
import DataTable from './DataTable';
import NewUserForm from './NewUserForm';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search />
            <DataTable />
            <NewUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
