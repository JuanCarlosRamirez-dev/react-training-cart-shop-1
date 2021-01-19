import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ onHandleClick, label, className, type = "button" }) => (
    <button
        type={type}
        className={className}
        onClick={onHandleClick}>
        {label}
    </button>
)

Button.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onHandleClick: PropTypes.func
}

export default Button