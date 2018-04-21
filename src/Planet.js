import React, { Component } from 'react';

import Residents from './Residents';

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleClick = () => {
    // expand or collapse contents
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { expanded } = this.state;
    const { name, residents } = this.props;

    return (
      <li>
        <button onClick={this.handleClick}>
          {name}
        </button>

        {
          expanded
            ? <Residents residentUrls={residents} />
            : null
        }
      </li>
    );
  }
}

export default Planet;
