import React, { Component } from 'react';

import { ListItem } from './styled/listElements';
import { Button, Arrow } from './styled/planetElements';

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
          {
            expanded
              ? <Arrow src="close.svg" />
              : <Arrow src="open.svg" />
          }
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
