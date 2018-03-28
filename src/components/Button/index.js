import React from 'react';
import styled from "styled-components";

export const Button = styled.button`
  background: ${
    props =>  props.primary ? '#FFE521' :
              props.secondaryA ? '#FF009E' :
              props.secondaryB ? '#56F89A' :
              'f1f1f1'
  };  

  color: ${
    props =>  props.secondaryA ? '#fff' :
              props.secondaryB ? '#000' :
              '#000'
  };

  padding: ${
    props =>  props.small ? '10px' :
              props.medium ? '10px 20px' :
              props.large ? '10px 30px' :
              '5px'
  };

  font-size: ${
    props =>  props.medium ? '20px' :
              props.large ? '24px' :
              '16px'
  };

  border: none;
  border-radius: 2px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
`;