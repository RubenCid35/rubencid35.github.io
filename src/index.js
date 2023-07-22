// import i18n from 'i18next'
// import { userTranslation, initReactI18next} from 'i18next'


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
),
document.getElementById('root')
)
