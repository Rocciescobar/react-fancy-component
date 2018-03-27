
import React from 'react';
import PropTypes from 'prop-types'

const BtnSecondary = ({ label }) => {

  const styleBtn = {    
    height: '50px', 
    border: 'none',
    fontSize: '16px', 
    fontFamily: 'Open Sans', 
    borderRadius: '2px',
    padding: '10px',
    fontWeight: '800'
  }

  const colorPrimary = {
    backgroundColor: '#56F89A',
    color: '#000'
  }

  return (
  <button style={style}>
    {label}
  </button>
)
}

export const Props = {
  label: PropTypes.string.isRequired
}

BtnSecondary.propTypes = Props

export default BtnSecondary