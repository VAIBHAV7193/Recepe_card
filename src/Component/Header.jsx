import React from 'react'
import './Header.css'
import { useDispatch,useSelector } from 'react-redux'
import getSearchData from './Redux/Action'

const Header = (props) => {
  const dispatch = useDispatch();
  const changeHandler = (e) =>{
    
    dispatch(getSearchData(e.target.value))

  }

  const state = useSelector((state)=> state.reducer)
  console.log(state)
  
  return (
    <div className='header-main'>
        <div className='heading'>
            <h1>Search Your Food Receipe</h1>
            
        </div>
        <div className="searchbox">
            <input type="search"  className='search-bar' value={props.search} placeholder='Enter Food name' onChange={changeHandler}/>
        </div>
        
    </div>
  )
}

export default Header

