import Design from './Design';    // comment all truckdesign.css for this page's css
import Truckdesign from './load-unload/Truckdesign';
import Truckarrow from './load-unload/Truckarrow';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Design />    
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Truckdesign />} />
          <Route exact path="/Truckarrow" element={<Truckarrow />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
