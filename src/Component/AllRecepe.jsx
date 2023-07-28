import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import './AllRecepe.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const AllRecepe = (props) => {

   const[data,setData] =useState([]);

   const fetch_Data = ()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
   .then(res=> res.json())
   .then(data=> 
    setData(data.meals));
   }

   useEffect(()=>{
    fetch_Data()
   },[])
   const state = useSelector((state)=> state.reducer)
    
   console.log(state)
  return (
    <Layout>
        <div className='all-recepe'>
            {
                data.sort((e1,e2)=>{
                    if(e1.strIngredient > e2.strIngredient) return 1;
                    if(e1.strIngredient < e2.strIngredient) return -1;
                    return 0;
                  }).filter((value)=> {
                    if(value.strIngredient.toLowerCase().includes(state.toLowerCase())){
                      return true;
                    }
                  })
                .map((recepe)=>{
                    return(
                        <div className='recepe-card' key={recepe.idIngredient}>
                        <h3>{recepe.strIngredient}</h3>
                        <button><Link to={`/card/${recepe.strIngredient}`}>Click Me</Link></button>
                    </div>
                   

                    )
                })
            }
           

        </div>
    </Layout>
  )
}

export default AllRecepe
