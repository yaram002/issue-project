
import React from 'react'
import '../css/App.css';

import Ser from '../pages/search';


import Homepage from '../pages/homepage.jsx';

import GetReq from '../pages/getrout.jsx';
import Navbaar from '../pages/navebar.jsx';

import Update from '../pages/update.jsx'
import Addissu from '../pages/addissu.jsx'


import {BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {



return(
  

  <div>
<BrowserRouter>

<Routes>

<Route index element={<Homepage/>}/>
<Route path='getdata' element={<GetReq/>} />

 <Route path='search' element={<Ser/>} />
 <Route path='homepage' element={<Homepage/>} />
 <Route path='addissu' element={<Addissu/>} />
<Route path='*' element= <h1>no page</h1> />

<Route path='update' element={<Update/>} />








</Routes>



</BrowserRouter>





  </div>

)




}
export default App;
