
import React from 'react';
import PropTypes from 'prop-types'

const Fancy = ({ label }) => (
  <button style={{ backgroundColor: 'red' }}>
    {label}
  </button>
)

export const Props = {
  label: PropTypes.string.isRequired
}

Fancy.propTypes = Props

export default Fancy