import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { UserService } from "../services/UserService"

import 'primereact/resources/themes/omega/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

export class UserTable extends Component {

  constructor() {
    super();
    this.state = {
    };
    this.userservice = new UserService();
  }

  componentDidMount() {
    this.userservice.getUsers().then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div id='grid-body' className='right-column'>
        <DataTable value={this.state.users}>
          <Column field="id" header="Id" sortable={false} />
          <Column field="name" header="Name" sortable={true} />
          <Column field="username" header="Username" sortable={true} />
          <Column field="email" header="Email" sortable={true} />
        </DataTable>
        <div>
          * Wszystkich rekordów pobranych z API: {this.state.users!==undefined?this.state.users.length:"loading..."}.
        </div>
      </div>
    );
  }
}

export default UserTable;
