import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ onHandleClick, label, className }) => (
    <button
        className={className}
        onClick={onHandleClick}>
        {label}
    </button>
)

Button.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onHandleClick: PropTypes.func.isRequired
}

export default Button