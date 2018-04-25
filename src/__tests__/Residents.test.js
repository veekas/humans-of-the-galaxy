import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Residents from '../Residents';

enzyme.configure({ adapter: new Adapter() });

describe('<Residents />', () => {
  it('renders successfully', () => {
    const props = { residentUrls: ['https://swapi.co/api/people/1'] };
    const component = shallow(<Residents {...props} />);
    expect(component).toMatchSnapshot();
  });
});
