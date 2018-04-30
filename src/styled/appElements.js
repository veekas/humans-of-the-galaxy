import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  position:relative;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Header = styled.header`
  top: 0px;
  position: sticky;
  background-color: #28333c;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #ecf1c1;
  text-align: center;
  font-size: 1.8em;
`;

export const MainLoading = styled.img`
  display: block;
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  padding-bottom: 140px;
`;

export const ControlsContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #28333c;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

// same margin and height as styled Title element
export const Control = styled.img`
  height: 34px;
  margin: 19.296px;
`;
