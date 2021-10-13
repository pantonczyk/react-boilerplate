import { useState, useEffect, useRef } from 'react';
import { bool } from 'prop-types';

const useComponentVisible = (initialIsVisible) => {
    const [isMenuOptionsVisible, setIsMenuOptionsVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsMenuOptionsVisible(false);
        }
    };

    const handleClickToggleVisibility = () => {
        setIsMenuOptionsVisible((prevState) => !prevState);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isMenuOptionsVisible, setIsMenuOptionsVisible, handleClickToggleVisibility };
};

useComponentVisible.propTypes = {
    initialIsVisible: bool.isRequired,
};

export default useComponentVisible;
