import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, desiredIncrement, increment } from '../store'
import { useState } from 'react'

function ChangeStatus(props) {
    const [payloadNum , setPayloadNum] = useState()

    const dispatch = useDispatch()

    const parsed = parseInt(payloadNum);

    const inputNumber = (e) => {
       setPayloadNum(e.target.value)
    }

    const incrementCounterHandler = () => {
        dispatch(increment())
    }

    const decrementCounterHandler = () => {
        dispatch(decrement())
    }

    const takeInputNumber = () => {
        dispatch(desiredIncrement(parsed))
    }

  return (
    <div>
        <button onClick={incrementCounterHandler}>increace</button>
        <button onClick={decrementCounterHandler}>decreace</button> 
        <div>
        <input type="text" onChange={inputNumber}/>
        <button onClick={takeInputNumber}>desired increment</button>
        </div>
        {props.children}
    </div>
  )
}

export default ChangeStatus