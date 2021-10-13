import React from 'react';
import { getAction } from 'store/actions';

export const useAction = (Action) => {
    const { current } = React.useRef(getAction(Action));
    return current;
};
