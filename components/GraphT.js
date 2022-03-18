import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'
import data from '../../weather_backend/data.json'

export default function GraphT() {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0077f6" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#0077f6" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <CartesianGrid opacity={0.1} vertical={false} />
        <XAxis dataKey="timestamp" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} tickCount={4} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="t2"
          stroke="#0077f6"
          activeDot={{ r: 5 }}
          fill="url(#color)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
  function CustomTooltip({ active, payload, label }) {
    console.log(payload)
    if (active) {
      return (
        <div className="rounded-md bg-white shadow-2xl text-center p-2">
          <p>Temperature: {payload[0].value.toFixed(1)} ºC</p>
          <h1>{label.substring(10, 30)}</h1>
          <div>{label.substring(0, 10)}</div>
        </div>
      )
    }
    return null
  }
}
