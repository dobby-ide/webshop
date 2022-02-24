import React from 'react';
import { Route, Routes , Switch,BrowserRouter} from "react-router-dom";
import CreateUser from "./CreateUser";
import App from "./App";
import Navbar from './Components/Navbar';

function RouterPath() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
        <Switch>
        <Route path='/' exact>
                <App/>
            </Route>
            <Route path='/register' >
                <CreateUser/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default RouterPath