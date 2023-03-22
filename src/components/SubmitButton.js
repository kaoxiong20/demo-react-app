import React from 'react';
import styled from 'styled-components';

function SubmitButton() {
  return (
    <AwesomeButton>Submit</AwesomeButton>
  );
}

export default SubmitButton;

const AwesomeButton = styled.button`
  background-color: #789F6E;
  padding: 6px;
  cursor: pointer;
  border-radius: 10px;
`;