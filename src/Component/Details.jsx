import React from 'react'
import './Details.css'

const Details = (props) => {
  return (
    <div className='details'>

        <div className='single-card2' style={{width:'60%',backgroundColor:'transperent'}}  >
            <img src={props.recepe.strMealThumb}alt="Image" style={{height:'200px', width:'200px'}} />
            <div className='single-heading'>
                <h3>{props.recepe.strMeal}</h3>
                 <h3>Ingredient</h3>
             </div>
        </div>

       
        <div className='label'>
              <label htmlFor="">Category Name:  {props.recepe.strCategory}  </label>
              <a href={props.recepe.strYoutube}>Youtube Link</a>
        </div>

        <div className="cooking" >
              <h3>Cooking Instruction :</h3>
              <p>{props.recepe.strInstructions}</p>
        </div>

        <div className="ingredients">
          <div>
          <h4 style={{color:'white'}}>Ingredients:</h4>
          </div>
         
              <div style={{overflow: 'scroll',height: '200px'}}>
                <ul>
                  <li>{props.recepe.strIngredient1}</li>
                  <li>{props.recepe.strIngredient2}</li>
                  <li>{props.recepe.strIngredient3}</li>
                  <li>{props.recepe.strIngredient4}</li>
                  <li>{props.recepe.strIngredient5}</li>
                  <li>{props.recepe.strIngredient6}</li>
                  <li>{props.recepe.strIngredient7}</li>
                  <li>{props.recepe.strIngredient8}</li>
                  <li>{props.recepe.strIngredient9}</li>
                  <li>{props.recepe.strIngredient9}</li>
                  <li>{props.recepe.strIngredient9}</li>
                  <li>{props.recepe.strIngredient9}</li>
                  <li>{props.recepe.strIngredient9}</li>
                  <li>{props.recepe.strIngredient9}</li>
                </ul>
              </div>
            </div>
        
      
    </div>
  )
}

export default Details
