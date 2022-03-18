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
    <div className="h-screen w-full">
      {data ? (
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
                <stop
                  offset="75%"
                  stopColor="#0077f6"
                  stopOpacity={0.05}
                ></stop>
              </linearGradient>
            </defs>
            <CartesianGrid opacity={0.1} vertical={false} />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="t2"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
