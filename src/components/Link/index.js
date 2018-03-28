import React from 'react';
import styled from "styled-components";

export const Link = styled.a`
  color: ${
    props =>  props.colorSA ? '#E8059C' :
              props.colorSB ? '#009B57' :
              '#000'
  };

  font-size: ${
    props =>  props.h1 ? '2.5rem' :
              props.h2 ? '2rem' :
              props.h3 ? '1.75rem' :
              props.h4 ? '1.5rem' :
              props.paragraph ? '1.25rem' :
              '1rem'
  };

  font-weight: ${
    props =>  props.bold ? 'bold' :
              '400'
  };

  font-family: 'Open Sans', sans-serif;
  text-decoration: underline;
`;