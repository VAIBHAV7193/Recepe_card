import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './RecepeCard.css'

const RecepeCard = () => {
    const params = useParams()
    const {ingredient} = params;

    const[data,setData] =useState([]);

   const fetch_Data = ()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
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
        <div>
        <div className='single-recepe-card'>
            
            {
                data.map((recepe)=>{
                    return(
                        <div className='single-card'  key={recepe.idMeal}>
                            <div> <img src={recepe.strMealThumb} alt="Image" style={{height:'200px', width:'200px'}} /></div>
                           
                           <div className='single-heading'>
                             <h3>{recepe.strMeal}</h3>
                             <Link to={`/ingredients/${recepe.idMeal}`}>Ingredients</Link>
                             </div>
                        </div>

                    )
                })
            }

        </div>
        </div>
    </Layout>
    
  )
}

export default RecepeCard
