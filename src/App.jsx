import React from 'react';
import { useNavigate,Routes,Route } from 'react-router-dom';
import CreateCategoryForm from './Components/CreateCategoryForm';
import Home from './Components/Home';
import "./Styles/App.css";
const App = () => {
  const navigate = useNavigate();
  return (
    

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<CreateCategoryForm/>}></Route>
      </Routes>
    
  );
};

export default App;