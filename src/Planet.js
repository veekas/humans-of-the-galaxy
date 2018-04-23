import React, { Component } from 'react';

import { ListItem } from './styled/listElements';
import { Button } from './styled/planetElements';

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
      <ListItem>
        <Button onClick={this.handleClick}>
          {name}
        </Button>

        {
          expanded
            ? <Residents residentUrls={residents} />
            : null
        }
      </ListItem>
    );
  }
}

export default Planet;
