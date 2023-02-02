import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer';
// initial state

const initialState = {
    likelist : localStorage.getItem('likelist') ? JSON.parse(localStorage.getItem('likelist')) : []
};

// create context

export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = props =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=>{
        localStorage.setItem('likelist', JSON.stringify(state.likelist))
    },[state])

    // actions
    const addVideoToLikelist = items =>{
        dispatch({type: "ADD_VIDEO_TO_LIKELIST", payload: items})
    }

    const removeVideoFromLikelist = vkey =>{
        dispatch({type: "REMOVE_VIDEO_FROM_LIKELIST", payload: vkey})
    }


    return(
        <GlobalContext.Provider value={{likelist:state.likelist, addVideoToLikelist, removeVideoFromLikelist
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}
