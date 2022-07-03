import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ImageList from './ImageList';

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
      selected: 'All'
    };
  }

  render() {
    return (
      <div className='container'>
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={(evt) => {
            this.setState({ selected: evt.target.innerText });
          }}
        />

        <div>
          <ImageList filter={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default Portfolio;