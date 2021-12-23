import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';
import ErrorBoundary from './components/ErrorBoundary';

ReactDom.render(
        <React.StrictMode>
            <ErrorBoundary>
                <Router>
                    <Provider store={store}>
                        <App /> 
                    </Provider>
                </Router>
            </ErrorBoundary>
        </React.StrictMode>,
    document.getElementById('root')
    );