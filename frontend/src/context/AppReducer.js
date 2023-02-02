export default   (state, action) => {
    switch(action.type){
        case "ADD_VIDEO_TO_LIKELIST":
            return{
                ...state, 
                likelist: [action.payload, ...state.likelist]
            };
        case "REMOVE_VIDEO_FROM_LIKELIST":
            return{
                ...state,
                likelist: state.likelist.filter( items => items.vkey !== action.payload)
             
            }    
        default:
            return state;
    }
}