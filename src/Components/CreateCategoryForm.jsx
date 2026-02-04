import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useState,useContext } from 'react';
import CategoryContext from './CategoryContext';
import "../Styles/CreateCategoryForm.css" ;
import "../assets/FormImage.jpeg";
const CreateCategoryForm = () => {
    const [newcat,setNewcat] = useState({
        catname :"",
        catdesc :"",
        catpriority:0,
        tasks:[]

    });
    const{categories,setCategories} = useContext(CategoryContext);
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        setCategories([...categories,newcat])
        setNewcat({
        catname :"",
        catdesc :"",
        catpriority:0,
        tasks:[]

    });
    navigate("/");
    }
    return (
        <div className='form-container'>
            {/* <h2 className='form-title'>Hello User!! Let's Create a new Category Of Tasks: </h2> */}
            
            <br></br>
            <form onSubmit={handleSubmit} className='form-box'>
               <label htmlFor="categoryname">Enter Category : </label>
               <input id="categoryname" value = {newcat.catname} type="text" onChange={(e) => setNewcat({...newcat,catname:e.target.value})}></input> 
               <br></br>
               <br></br>
               <label htmlFor="priority">Set Priority : </label>
               <input id="priority" type="range" value={newcat.catpriority} onChange={(e) => setNewcat({...newcat,catpriority:Number(e.target.value)})}></input>
               <br></br>
               <br></br>
               <label htmlFor="categorydesc">Description : </label>
               <br></br>
               <textarea id="categorydesc" value={newcat.catdesc} rows="10" cols="30" onChange={(e) => setNewcat({...newcat,catdesc:e.target.value})}></textarea>
               <br></br>
                <br></br>
               <button type="submit" className='submit-btn'>Create</button>
            </form>
        </div>
    );
};

export default CreateCategoryForm;