import React from 'react';
import styled from 'styled-components';

function Title() {
  return (
    <>
    <CoolH1>Kao's Demo Project</CoolH1>
    <p>React is kinda hard...</p>
    </>
  );
}

export default Title;

const CoolH1 = styled.h1`
background-color: #847C7A;
font-family: Times New Roman;
padding: 16px;
font-size: 60px;
`