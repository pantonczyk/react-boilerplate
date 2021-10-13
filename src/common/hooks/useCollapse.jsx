import { useState } from 'react';
import { bool } from 'prop-types';

const useCollapse = (initialState) => {
    const [isExpanded, setIsExpanded] = useState(initialState);

    const handleClickToggleExpanded = () => {
        setIsExpanded((prevState) => !prevState);
    };

    return { isExpanded, setIsExpanded, handleClickToggleExpanded };
};

useCollapse.propTypes = {
    initialState: bool.isRequired,
};

export default useCollapse;
