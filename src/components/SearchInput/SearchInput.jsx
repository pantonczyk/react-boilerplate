import React from 'react';
import { string, oneOf } from 'prop-types';

import SearchIcon from 'icons/search_icon.svg';
import './SearchInput.scss';

const SearchInput = ({ id, name, placeholder, variant = 'primary', ...props }) => {
    return (
        <div className={`searchInput searchInput--${variant}`}>
            <input
                id={id}
                type="search"
                name={name}
                placeholder={placeholder}
                className="searchInput__field"
                {...props}
            />
            <img src={SearchIcon} alt="Search icon" className="searchInput__icon" />
        </div>
    );
};

SearchInput.propTypes = {
    id: string,
    name: string,
    placeholder: string,
    variant: oneOf(['primary', 'secondary']),
};

export default SearchInput;
