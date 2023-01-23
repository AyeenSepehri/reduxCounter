import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../store'

function ChangeStatus(props) {
    const dispatch = useDispatch()

    const incrementCounterHandler = () => {
        dispatch(increment())
    }

    const decrementCounterHandler = () => {
        dispatch(decrement())
    }

  return (
    <div>
        <button onClick={incrementCounterHandler}>increace</button>
        <button onClick={decrementCounterHandler}>decreace</button> 
        {props.children}
    </div>
  )
}

export default ChangeStatus