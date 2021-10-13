import React from 'react';
import { bool, oneOf, node, func } from 'prop-types';

import './Button.scss';

const Button = ({ variant = 'primary', textTransform, disabled, children, onClick, ...props }) => {
    return (
        <button
            className={`button button--${variant} button--${textTransform}
                ${disabled && 'button--disabled'}`}
            onClick={!disabled ? onClick : () => {}}
            {...props}
        >
            {children || 'button'}
        </button>
    );
};

Button.propTypes = {
    variant: oneOf(['primary', 'secondary']),
    textTransform: oneOf(['uppercase', 'capitalize']),
    disabled: bool,
    children: node,
    onClick: func,
};

export default Button;
