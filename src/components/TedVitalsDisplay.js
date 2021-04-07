import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { ted: state.ted }
}

const ConnectedVitalsDisplay = ({ ted }) => {
  let personName = 'Ted'
  return (
    <div className='bg-white rounded shadow border p-4 w-64'>
      <h6 className='text-xl font-bold'>{personName}&apos;s Vitals</h6>
      <div>
        <label>Faith: </label>
        {ted.faith}/{ted.faith_max}
      </div>
    </div>
  )
}
const TedVitalsDisplay = connect(mapStateToProps)(ConnectedVitalsDisplay)
export default TedVitalsDisplay
