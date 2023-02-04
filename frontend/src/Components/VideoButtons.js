import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const VideoButtons = ({props, type}) => {
  const { removeVideoFromLikelist} = useContext(GlobalContext);
  console.log(props)
  return (
    <div className='inner-card-controls'>
      {
        type === 'likelist' && (
            <>
            <button type='button' className='ctrl-btn' onClick={()=> removeVideoFromLikelist(props.vkey)} >
            <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
            </>
        )
      }
      
    </div>
  )
}


