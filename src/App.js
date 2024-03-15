import React, { Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
//import About from './Components/About';
import { Routes, Route } from "react-router-dom";
import Contact from './Components/Contact';
import { Error } from './Components/Error';
import { RestaurantMenu } from './Components/RestaurantMenu';
import UserContext from './utils/UserContext';
//import { Grocery } from './Components/Grocery';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';
import appStore from './utils/appStore';
function App() {
  const About=lazy(()=>
  import("./Components/About")
);
//Authentication 
const [userName,setUserName]=useState();


useEffect(()=>{
  //Make APi call get the user details
  const data={
    name:"ChandraSekhar"
  };
  setUserName(data.name);

},[])
  return (
    <Provider store={appStore}>
<UserContext.Provider value={{loggedInUser:userName,setUserName}}>
           <div className="App">
               <Header/> <Routes>
      <Route
          path="/"
          element={
            <>
              <Body />
            </>
          }
          
        />
      <Route path="/Header" element={<Header />} />
        <Route path="/Body" element={<Body />} />
        <Route path="/about" element={<Suspense fallback={<h1>FetchingDeatils........</h1>}><About /></Suspense>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </UserContext.Provider>
    </Provider>
    

  );
}

export default App;
