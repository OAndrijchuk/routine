import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 
let rerenderStore = (state) =>
    
{
    root.render(
      <React.StrictMode>
        <App    
                mastersPerson={store.getState().masters}
                dispatch={store.dispatch.bind(store)}
                dataText={store.getState().data}/>
      </React.StrictMode>
    );
    }
    

rerenderStore(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderStore(state);
});

reportWebVitals();
