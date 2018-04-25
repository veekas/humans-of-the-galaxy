import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  expandOrCollapse = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { expanded } = this.state;
    const { name, residents } = this.props;

    return (
      <ListItem>
        <Button onClick={this.expandOrCollapse}>
          {
            expanded
              ? <Arrow src="close.svg" />
              : <Arrow src="open.svg" />
          }
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

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  residents: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Planet;
