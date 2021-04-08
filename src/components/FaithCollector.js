import { useDispatch } from 'react-redux'
import { collectFaith } from '../actions/index'
import { useCallback } from 'react'

const FaithCollector = () => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(collectFaith())
  }, [])
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
