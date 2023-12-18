import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import items from './data';
import Products from './products';



function Search({cart,setCart}) {
  const {term}=useParams();
  const[filteredData,setFilteredData]=useState([]);

  useEffect(()=>{
    const filterByTitle=(title)=>{
    const titleData=items.filter((product)=>(product.title.toLowerCase().includes(term.toLowerCase())))
    setFilteredData(titleData);
  }
  filterByTitle();
},[term])
    
  return (
   <div>
    <Products cart={cart} setCart={setCart} items={filteredData}/>
     
   </div>
  )
}

export default Search;
