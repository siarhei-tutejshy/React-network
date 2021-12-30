
import './index.css';

import reportWebVitals from './reportWebVitals';


import { rerenderEntireTree } from './render';
import state from './redux/state/state';

rerenderEntireTree(state);



reportWebVitals();
