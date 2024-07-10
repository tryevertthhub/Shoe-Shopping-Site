import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from 'react-router-dom';
  import PrivateRoute from './components/PrivateRoute';

  import { Provider } from 'react-redux';
  import store from './store';
  import Home from './pages/Shop/Home';
  import Login from './pages/Auth/Login';
  import ProductDetail from './pages/Shop/ProductDetail';
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index={true} path='/' element={(<App />)} />
        <Route path='/login' element={<Login />} />
      
        <Route path='' element={<PrivateRoute />}>
             <Route  path='/pages/:id' element={(<App />)} />
          <Route
              path="/detail/:id"
              element={<ProductDetail  />}
            ></Route>
        </Route>
    
      </Route>
    )
  );
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  );
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
