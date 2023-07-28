import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import { useParams } from 'react-router'
import Details from './Details';

const IngredientsCard = () => {
    const params = useParams();
    const{id} = params;

    const[data,setData] =useState([]);

    const fetch_Data = ()=>{
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=> res.json())
    .then(data=> 
     setData(data.meals));
    }
 
    useEffect(()=>{
     fetch_Data()
    },[])
     console.log(data)
 

  return (
    <Layout>
        {
            data.map((recepe)=>{
                return(
                    <Details key={recepe.idMeal} recepe ={recepe}/>

                )
            })
        }
       

    </Layout>
   
  )
}

export default IngredientsCard
