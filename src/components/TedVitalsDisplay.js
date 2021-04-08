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

      <button className='relative h-12 w-full border'>
        <div className='p-1 absolute left-0 top-0 h-6 w-1/2 bg-red50 text-left font-bold text-size-lg'>
          Miracles
        </div>
        <div className='p-1 absolute right-0 top-0 h-6 w-1.2 bg-blue50 text-right font-bold text-size-lg'>
          (5)
        </div>
        <div className='p-1 absolute bottom-0  h-6 bg-green50 text-left text-size-sm font-light'>
          Increase by an ammoutn
        </div>
      </button>
      <button className='relative h-12 w-full border-gray-600 border-0 text-white bg-blue-600 hover:bg-blue-800  rounded'>
        <div className='p-1 absolute left-0 top-0 h-6 w-1/2 text-left font-bold text-size-lg'>
          Miracles
        </div>
        <div className='p-1 absolute right-0 top-0 h-6 w-1.2 text-right font-bold text-size-lg'>
          (5)
        </div>
        <div className='p-1 absolute bottom-0  h-6  text-left text-size-sm font-light'>
          Increase by an ammoutn
        </div>
      </button>
      <button className='relative w-full h-16 border'>
        <span className='font-bold text-size-lg absolute top-0 left-0 bg-red50 align-left'>
          MicroMiracle Spawner
        </span>
        <span className='font-bold text-size-lg absolute top-0 right-0 bg-blue50 align-right'>
          (5)
        </span>
      </button>
    </div>
  )
}
const TedVitalsDisplay = connect(mapStateToProps)(ConnectedVitalsDisplay)
export default TedVitalsDisplay
