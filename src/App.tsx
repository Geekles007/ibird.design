import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderFragment from './fragments/HeaderFragment';
import Body from '../src/components/Body';
import styled from 'styled-components';

const Div = styled.div`

`;

function App() {
  return (
    <Div>
      <HeaderFragment />
      <Body></Body>
    </Div>
  );
}

export default App;
