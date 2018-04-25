import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import App from '../App';

describe('<App>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot on shallow render', () => {
    const component = create(<App />);
    const snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });
});
