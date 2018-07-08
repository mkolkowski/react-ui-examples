import React, { Component } from 'react';

import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Sidebar } from 'primereact/sidebar';

import 'primereact/resources/themes/omega/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

export class OtherControlls extends Component {

  constructor() {
    super();
    this.state = {
    }
    this.showSuccess = this.showSuccess.bind(this);
  }

  componentDidMount() {
  }

  showSuccess() {
    this.messages.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }

  render() {
    const footer = (
      <div>
        <Button label="Yes" icon="pi pi-check" />
        <Button label="No" icon="pi pi-times" />
      </div>
    );

    return (
      <div className='right-column'>
        <h2>Other example control ussage from primereact</h2>
        <div><h4>Masks & filters</h4>
          <div className="input-margin">
            Only integer <InputText keyfilter="int" />
          </div>
          <div className="input-margin">
            Money <InputText keyfilter="money" placeholder="Money" />
          </div>
          <div className="input-margin">
            Alfabet <InputText keyfilter="alpha" placeholder="Alphabetic" />
          </div>
          <div className="input-margin">
            Kod pocztowy <InputMask mask="99-999" placeholder="99-999"></InputMask>
          </div>
        </div>
        <div><h4>Date & time</h4>
          <div className="input-margin">
            Date <Calendar dateFormat="yy-mm-dd" onChange={(e) => this.setState({ date: e.value })}></Calendar>
          </div>
          <div className="input-margin">
            Date & time <Calendar value={this.state.date} showTime="true" onChange={(e) => this.setState({ date: e.value })}></Calendar>
          </div>
        </div>
        <div><h4>Dialog</h4>
          <div className="input-margin">
            <Button label="Show" icon="pi pi-info-circle" onClick={(e) => this.setState({ visibleDialog: true })} />
            <Dialog header="Dialog" visible={this.state.visibleDialog} width="350px" modal={true} onHide={(e) => this.setState({ visibleDialog: false })} footer={footer}>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis sem eget felis viverra fermentum. Morbi pretium ut neque et dictum. Pellentesque ultrices dolor id ligula malesuada porta. Etiam lectus quam, efficitur non lectus vel, consectetur pulvinar nisi. Morbi quis turpis tortor. Nullam condimentum quam vel sapien malesuada, non facilisis tortor pulvinar. Integer vulputate lobortis consectetur. Donec vel odio feugiat purus hendrerit hendrerit. Praesent tincidunt eget ante nec congue. Integer mollis eros at enim molestie condimentum. Quisque vitae ante aliquet, semper magna et, sagittis neque. Duis id erat at ipsum semper ornare sit amet et massa. </p>
            </Dialog>
          </div>
        </div>
        <div><h4>Messages</h4>
          <div className="input-margin">
            <Messages ref={(el) => this.messages = el}></Messages>
            <Button onClick={this.showSuccess} label="Click for success" className="ui-button-success" />
          </div>
        </div>
        <div><h4>ProgressSpiner</h4>
          <div className="input-margin">
            <ProgressSpinner style={{ width: '30px', height: '30px' }} strokeWidth="10" fill="#EEEEEE" animationDuration="1s" />
          </div>
        </div>
        <div><h4>Grid system</h4>
          <div className="input-margin">
            <div class="ui-g">
              <div class="ui-g-3">Col1</div>
              <div class="ui-g-3">Col2</div>
              <div class="ui-g-3">Col3</div>
              <div class="ui-g-3">Col4</div>
            </div>
            <div class="ui-g">
              <div class="ui-g-4">Col1</div>
              <div class="ui-g-4">Col2</div>
              <div class="ui-g-4">Col3</div>
            </div>
            <div class="ui-g">
              <div class="ui-g-6">Col1</div>
              <div class="ui-g-6">Col2</div>
            </div>
          </div>
        </div>
        <div><h4>Sidebars</h4>
          <div className="input-margin">
            <Sidebar visible={this.state.visibleSidebar} onHide={(e) => this.setState({ visibleSidebar: false })}>
              Content
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={(e) => this.setState({ visibleSidebar: true })} />
          </div>
        </div>
      </div>
    );
  }
}

export default OtherControlls;
