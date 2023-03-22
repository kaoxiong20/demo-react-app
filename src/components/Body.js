import React from 'react';
import styled from 'styled-components';

function Body() {
    return (
      <>
      <Paragraph>My name is Kao, I am Hmong. My hobbies include art and flag football.</Paragraph>
      <Paragraph>I have two kids, a tri-color corgi, and currently a fulll-time employee supporting Social Workers in the Social Services field.</Paragraph>
      </>
    );
  }
  
  export default Body;
  
  const Paragraph = styled.p`
  font-family: georgia;
  font-size: 15px;
  `