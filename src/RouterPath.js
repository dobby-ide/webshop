import React from 'react';
import { Route , Switch,BrowserRouter} from "react-router-dom";
import CreateUser from "./CreateUser";
import App from "./App";
import Navbar from './Components/Navbar';
import Login from './Login';

function RouterPath() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
        <Switch>
        
            
            <Route path='/register' component={CreateUser}/>
            <Route path='/' exact component={App}/>
           
            {/* <Route path='/signin' >
                <Login/>
            </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default RouterPath