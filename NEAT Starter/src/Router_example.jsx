import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./AboutUs/About";
import Homepage from "./Home/Homepage";
import NeatCalling from "./NeatCalling";
import Body1 from "./Body1";

function NotFound() {
  return <h1>Page Not Found</h1>;
}

function Router_example() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NeatCalling/>}>
          <Route path="/blog" element={<About/>}/>
          <Route path='/about us' element={<Homepage/>} />
          <Route path='/' element={<Body1/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router_example;
