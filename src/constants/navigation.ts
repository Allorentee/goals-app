import { NavItem } from './navigation.types'
import { CalendarIcon, FolderIcon } from '@heroicons/react/24/outline'

export const navigation: NavItem[] = [
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false }
]
