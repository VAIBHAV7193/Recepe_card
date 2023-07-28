const initialState = "";
 const reducer = (state = initialState,action)=>{
    switch(action.type){
        case  'getSearchData' :
            return (state = action.payload);
        
        default :
        return state
    }

}

export default reducer;