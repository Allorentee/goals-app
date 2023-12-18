import { Column } from './Table.props'

interface Props {
  readonly columns: Column[]
}

export function Columns({ columns }: Props) {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th
            key={crypto.randomUUID()}
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
          >
            {col.name}
          </th>
        ))}
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  )
}
