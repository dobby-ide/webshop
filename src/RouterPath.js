import React from 'react';
import { Route, Routes , Switch,BrowserRouter} from "react-router-dom";
import CreateUser from "./CreateUser";

function RouterPath() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path='/register' exact>
                <CreateUser/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default RouterPath