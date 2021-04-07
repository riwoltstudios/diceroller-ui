import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { incrementGameTick } from '../actions/index'

const GameTickDisplay = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(incrementGameTick())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  // [] to ensure this is only when mounted
  return (
    <div>
      <label>Ticks: </label> {props.tick}
    </div>
  )
}

const mapStateToProps = (state) => ({
  tick: state.tick,
})
export default connect(mapStateToProps)(GameTickDisplay)
