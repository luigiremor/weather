import React from 'react'
import { ChartBarIcon, HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Sidebar() {
  const menuOptions = [
    {
      name: 'Home',
      link: '/',
      icon: HomeIcon
    },
    {
      name: 'Stats',
      link: 'stats',
      icon: ChartBarIcon
    }
  ]
  return (
    <nav className="bg-gray-50 w-24 fixed z-1 h-screen mr-12">
      <div id="logo" className="flex justify-center ">
        <img
          className="p-2 h-24 grayscale"
          src="https://portalpadrao.ufma.br/ineof/imagens/logo-ufsc.png/@@images/84622670-9bb9-4fee-9460-dcfd76b7e33f.png"
        />
      </div>
      <nav>
        {menuOptions.map(item => (
          <Link href={item.link} key={item.name}>
            <div className="block hover:bg-white rounded-r-md hover:border-r-4 border-blue-500 p-2 hover:font-medium transition-colors ease-in duration-300 cursor-pointer">
              <div className="flex justify-center">
                <item.icon className="h-6 text-blue-500" />
              </div>
              <div className="flex justify-center text-sm">{item.name}</div>
            </div>
          </Link>
        ))}
      </nav>
    </nav>
  )
}
