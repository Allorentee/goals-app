export function Rows({ rows }: { readonly rows: any[] }) {
  return (
    <tbody className="divide-y divide-gray-800">
      {rows.map((row) => (
        <tr key={row.id}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
            {row.name}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
            {row.tasks}
          </td>
          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              Edit<span className="sr-only">{row.name}</span>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
