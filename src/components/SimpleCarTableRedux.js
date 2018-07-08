import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import 'primereact/resources/themes/omega/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

export class SimpleCarTableRedux extends Component {

  constructor({ cars, onMount }) {
    super();
  }

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div id='grid-body' className='right-column'>
        <DataTable value={this.props.cars}>
          <Column field="vin" header="Vin" sortable={false} />
          <Column field="year" header="Year" sortable={true} />
          <Column field="brand" header="Brand" sortable={true} />
          <Column field="color" header="Color" sortable={true} />
        </DataTable>

        <div>
          * Wszystkich rekordów z pliku JSON: {this.props.cars.length}
        </div>
      </div>
    );
  }
}

export default SimpleCarTableRedux;

