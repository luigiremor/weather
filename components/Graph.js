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
import { format, parseISO, subDays } from 'date-fns'

const data = []
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 25 + Math.random() * 10,
    value2: 20 - Math.random()
  })
}

export default function Graph() {
  return (
    <ResponsiveContainer width="95%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0077f6" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#0077f6" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#0077f6" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={str => {
            const date = parseISO(str)
            if (date.getDate() % 7 === 0) {
              return format(date, 'MMM, d')
            }
            return ''
          }}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={number => `${number.toFixed(1)} ºC`}
        />

        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  )

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="rounded-md bg-white shadow-2xl text-center p-2">
          <div>{format(parseISO(label), 'eeee, d MMM, yyyy')}</div>
          <p>Temperatura: {payload[0].value.toFixed(1)} ºC</p>
        </div>
      )
    }
    return null
  }
}
