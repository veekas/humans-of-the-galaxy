import React, { Component } from 'react';

import { getPlanetResidents } from './api';

const ResidentList = ({ residents }) => (
  residents.length
    ? residents.map(resident => <li key={resident.name}>{resident.name}</li>)
    : <div>This planet has no residents.</div>
);

class Residents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      residents: null,
    };
  }

  componentDidMount = () => {
    const { residentUrls } = this.props;
    getPlanetResidents(residentUrls)
      .then(residents => this.setState({ residents }));
  }

  componentWillUnmount = () => {
    console.log(this.statePromises)
  }

  render() {
    const { residents } = this.state;

    return (
      <ul>
        {
          residents
            ? <ResidentList residents={residents} />
            : <div>Loading...</div>
        }
      </ul>
    );
  }
}

export default Residents;
