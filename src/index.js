import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {DevSupport} from "@react-buddy/ide-toolbox";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        // <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            // <Provider store={store}>
                <App/>
            // </Provider>
        // </DevSupport>
);