import React from 'react'
import TestGraph from '../components/Graph copy'
// import data from '../../weather_backend/data.json'

// console.log(data)
export default function test2() {
  return (
    <div>
      <TestGraph />
      {/* {data.map(item => (
        <div className="flex m-2 space-x-2">
          <h1>{item.t2.toFixed(1)}</h1>
          <h1>{item.timestamp}</h1>
        </div>
      ))} */}
    </div>
  )
}
