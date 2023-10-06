import React from "react";
import {Card,CardContent} from "@mui/material";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Fruit } from "./components/Fruit";
import { Monuments } from "./components/Monuments";
import { Speedo } from "./components/Speedo";
import { NavList } from "./components/NavList";


function App() {
  return (
    <Card>
      <CardContent>
           <BrowserRouter>
           <NavList />
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route  path="/fruit" element={<Fruit />}/>
            <Route  path="/speedo" element={<Speedo />}/>
            <Route  path="/monuments" element={<Monuments />} />
           </Routes>
           </BrowserRouter>
        
      </CardContent>
    </Card>

  );
}

export default App;
