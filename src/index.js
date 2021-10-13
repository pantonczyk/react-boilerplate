import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App/App';
import 'translations/i18n';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
