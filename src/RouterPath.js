import React from 'react';
import { Route , Routes,BrowserRouter as Router, useRoutes} from "react-router-dom";
import CreateUser from "./CreateUser";
import App from "./App";
import Navbar from './Components/Navbar';
import Login from './Login';

const Page = () => {
  
  let routes = useRoutes([
    { path: "user", element: <CreateUser /> },
    { path: "/", element: <App /> }
    
  ]);
  return routes;
};

// function RouterPath() {
//   return (
//     <div>
//       {/* <Navbar/> */}
//      <Router>
//       <Page />
//     </Router>
//     </div>
//   )
// }

// function RouterPath() {
//   return (
//     <div>
//       <BrowserRouter>
//       <div>
//         <Navbar/>
//       </div>
//         <Switch>
        
            
//             <Route path='/register' component={CreateUser}/>
//             <Route path='/' exact component={App}/>
           
//             {/* <Route path='/signin' >
//                 <Login/>
//             </Route> */}
//         </Switch>
//       </BrowserRouter>
//     </div>
//   )
// }
function RouterPath() {
  return(
    <div>
      {/* <Router> */}
        <div>
          <Navbar/>
          <Router>
            <Page/>
            
            {/* <Route path="/"exact element={<App/>}/>
            <Route path="/user" element={<CreateUser/>}/> */}
            
          </Router>

        </div>
 
      {/* </Router> */}

    </div>
  )
}


export default RouterPath