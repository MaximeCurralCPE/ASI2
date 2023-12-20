import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'; // Import your Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store} >
      <App />
    </Provider>
    
)
