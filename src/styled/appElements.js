import styled from 'styled-components';

export const AppContainer = styled.div`
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
  font-size: 2em;
`;

export const MainLoading = styled.img`
  display: block;
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  padding-bottom: 150px;
`;

export const ControlsContainer = styled.footer`
  width: 100%;
  bottom: 0px;
  position: fixed;
  background-color: #28333c;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

export const Control = styled.img`
  height: 38px;
  margin: 21.44px;
`;
