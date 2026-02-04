import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import App from './App.jsx'
import CategoryContext from './Components/CategoryContext.js'
function Main(){
  const [categories,setCategories] = useState([]);
  return(
    <CategoryContext.Provider value={{categories,setCategories}}>
      <App></App>
    </CategoryContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Main></Main>
    </BrowserRouter>
  </StrictMode>,
)
