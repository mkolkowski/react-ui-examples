import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { CarService } from "../services/CarService"

import 'primereact/resources/themes/omega/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

export class ExtendableCarTable extends Component {

  constructor() {
    super();
    this.state = {
      cars: []
    };
    this.carservice = new CarService();
    this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
  }

  rowExpansionTemplate(data) {
    return (
      <div>
        <div>Vin: </div>
        <div style={{ fontWeight: 'bold' }}>{data.vin}</div>

        <div>Year: </div>
        <div style={{ fontWeight: 'bold' }}>{data.year}</div>
      </div>
    );
  }

  componentDidMount() {
    this.carservice.getCarsMedium().then(data => this.setState({ cars: data }));
  }

  render() {
    return (
      <div id='grid-body' className='right-column'>
        <DataTable value={this.state.cars} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({ expandedRows: e.data })} rowExpansionTemplate={this.rowExpansionTemplate}>
          <Column expander={true} style={{ width: '2em' }} />
          <Column field="vin" header="Vin" sortable={false} />
          <Column field="year" header="Year" sortable={true} />
          <Column field="brand" header="Brand" sortable={true} />
          <Column field="color" header="Color" sortable={true} />
        </DataTable>
        <div>
          * Wszystkich rekordów z pliku JSON: {this.state.cars.length}.
        </div>
      </div>
    );
  }
}

export default ExtendableCarTable;
