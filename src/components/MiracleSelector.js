// const miracles = [
//   {
//     description: "Hit all green lights on the way to work",
//     result: {faith: 5}
//   },
//   {
//     description: "Find a quarter",
//     result: {faith: 1}
//   },
//   {
//     description: "47 likes on your insta post",
//     result: {faith: 10}
//   }
// ]

function renderCost(costObj) {
  // for (let r in costObj) {
  // Object.keys(costObj).map((keyName, item)=> console.log(keyName, item))
  // }

  return (
    <div>
      {Object.keys(costObj).map((keyName, item) => (
        <li key={keyName}>
          <label className='font-bold capitalize'>{keyName} </label>
          <span>{item}</span>
        </li>
      ))}
    </div>
  )
}
const MiracleSelector = () => {
  const cost = { faith: 6 }
  const costs = { faith: 5, belief: 2, tenacity: 1 }
  return (
    <div className='bg-white rounded shadow border p-4 w-128 mb-1'>
      <h6 className='text-xl font-bold'>Miracles</h6>
      <button>Perform Random Miracle: {cost.faith}</button>
      <ul>{renderCost(costs)}</ul>
    </div>
  )
}
export default MiracleSelector
