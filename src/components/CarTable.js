import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';

import { CarService } from "../services/CarService"

import 'primereact/resources/themes/omega/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


export class CarTable extends Component {

  constructor() {
    super();
    this.state = {
      cars: []
    };
    this.carservice = new CarService();

    this.onBrandChange = this.onBrandChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.export = this.export.bind(this);
  }

  componentDidMount() {
    this.carservice.getCarsMedium().then(data => this.setState({ cars: data }));
  }

  onBrandChange(event) {
    this.dt.filter(event.value, 'brand', 'equals');
    this.setState({ brand: event.value });
  }

  onColorChange(event) {
    this.dt.filter(event.value, 'color', 'in');
    this.setState({ colors: event.value });
  }

  export() {
    this.dt.exportCSV();
  }

  render() {
    var header = <div style={{ textAlign: 'left' }}><Button type="button" iconPos="left" label="CSV" onClick={this.export}></Button></div>;

    let brandFilter = this.getBrandFilter();
    let colorFilter = this.getColorsFilter();

    return (

      <div id='grid-body' className='right-column'>
        <DataTable value={this.state.cars} ref={(el) => this.dt = el} value={this.state.cars} paginator={true} rows={15} header={header}>
          <Column field="vin" header="Vin" sortable={false} filter={false} />
          <Column field="year" header="Year" sortable={true} filter={true} />
          <Column field="brand" header="Brand" sortable={true} filter={true} filterElement={brandFilter} />
          <Column field="color" header="Color" sortable={true} filter={true} filterElement={colorFilter} />
        </DataTable>
        <div>
          * Wszystkich rekordów z pliku JSON: {this.state.cars.length}.
        </div>
      </div>
    );
  }

  getColorsFilter() {
    let colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];
    let colorFilter = <MultiSelect style={{ width: '100%' }} className="ui-column-filter" value={this.state.colors} options={colors} onChange={this.onColorChange} />;
    return colorFilter;
  }

  getBrandFilter() {
    let brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
    let brandFilter = <Dropdown style={{ width: '100%' }} className="ui-column-filter" value={this.state.brand} options={brands} onChange={this.onBrandChange} />;
    return brandFilter;
  }
}

export default CarTable;
