import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index.jsx';

const store = createStore(allReducers)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>
)
