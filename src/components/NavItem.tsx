import { Link } from 'react-router-dom'

import { NavItem } from '../constants/navigation.types'
import { classNames } from '../utils/classes'

export function NavigationMenu({ menu }: { menu: Readonly<NavItem[]> }) {
  return (
    <ul className="-mx-2 space-y-1">
      {menu.map((item) => (
        <li key={item.name}>
          <Link
            to={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800',
              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
            )}
          >
            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
