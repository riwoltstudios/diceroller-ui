import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return { faith: state.faith, faith_max: state.faith_max }
}

const ConnectedResourceDisplay = ({ faith, faith_max }) => {
  return (
    <div className='bg-white rounded shadow border p-4 w-64 mb-1'>
      <h6 className='text-xl font-bold'>Resources</h6>
      <div>
        <label>Faith: </label>
        {faith}/{faith_max}
      </div>
      <div>
        <label>Belief: </label>
        {9}
      </div>
    </div>
  )
}
const ResourceDisplay = connect(mapStateToProps)(ConnectedResourceDisplay)
export default ResourceDisplay
