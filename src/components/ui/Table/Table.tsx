import { Button, Columns, Rows } from '..'
import { es } from '../../../locales/es'

export function Table({ columns, rows }: { columns: any; rows: any }) {
  return (
    <section className="bg-gray-900 rounded-lg">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">
                  {es['common.projects']}
                </h1>
              </div>
              <Button title={es['common.project.add']}></Button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <Columns columns={columns}></Columns>
                    <Rows rows={rows}></Rows>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
