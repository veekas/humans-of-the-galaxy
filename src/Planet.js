import React, { Component } from 'react';

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  handleKeyPress = e => {
    const key = e.keyCode;
    console.log(key);
    if (key === 13 || key === 27) { // Enter or Esc
      this.toggleExpansion();
    }
  }

  render() {
    const { expanded } = this.state;
    const { name } = this.props;

    return (
      <li>
        <button
          // tabIndex="0"
          onKeyPress={this.handleKeyPress}
          onClick={this.toggleExpanded}
        >
          {name}
        </button>

      </li>
    );
  }
}

export default Planet;
