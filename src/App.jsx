import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";

import Contact from "./pages/Contact";
import Layout from "./Layout/Layout";
import Projects from "./pages/Projects";
import { div } from "framer-motion/client";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<Layout />}>
         
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
     
     
      </Route>
    )
  );

  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;