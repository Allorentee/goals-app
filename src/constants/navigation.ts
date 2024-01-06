import { NavItem } from './navigation.types'
import {
  CalendarIcon,
  FolderIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export const navigation: NavItem[] = [
  { name: 'Proyectos', href: '/', icon: FolderIcon, current: false },
  { name: 'Tareas', href: '/tasks', icon: DocumentTextIcon, current: false },
  { name: 'Calendario', href: '#', icon: CalendarIcon, current: false }
]
