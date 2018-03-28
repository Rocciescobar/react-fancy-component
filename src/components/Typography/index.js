import React from 'react';
import styled from "styled-components";

export const Typography = styled.p`
  color: ${
    props =>  props.colorP ? '#FFE521' :
              props.colorSA ? '#FF009E' :
              props.colorSB ? '#56F89A' :
              '#000'
  };

  font-family: ${
    props =>  props.bitter ? "'Bitter', serif" : 
              "'Open Sans', sans-serif"
  };

  font-weight: ${
    props =>  props.bold ? 'bold' :
              '400'
  };

  font-size: ${
    props =>  props.h1 ? '2.5rem' :
              props.h2 ? '2rem' :
              props.h3 ? '1.75rem' :
              props.h4 ? '1.5rem' :
              props.paragraph ? '1.25rem' :
              '1rem'
  };
`;