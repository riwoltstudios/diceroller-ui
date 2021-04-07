import React from 'react'
import { useDispatch } from 'react-redux'
import { collectFaith } from '../actions/index'

const FaithCollector = () => {
  const dispatch = useDispatch()
  const handleClick = function() {
    dispatch(collectFaith())
  }
  return (
    <div>
      <button
        className='text-white font-bold bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded'
        onClick={handleClick}
      >
        Collect Faith
      </button>
    </div>
  )
}

export default FaithCollector
