import React from 'react'
import {useDispatch} from 'react-redux'
import {actionCreators} from '../state/index'
import { useSelector } from 'react-redux'


function Shop() {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount)
  return (
    <div>
        <button onClick={()=>dispatch(actionCreators.withDrawMoney(100))} disabled={amount <=0}>-</button>
      add to cart
      <button onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop
