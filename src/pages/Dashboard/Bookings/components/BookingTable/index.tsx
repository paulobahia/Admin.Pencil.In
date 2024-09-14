import { Card } from "@/components/ui/card"
import { Toolbar } from "./components/Toolbar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { useState } from "react"
import { columns } from './components/Columns'
import { Pagination } from "./components/Pagination"

const data = [
  {
    id: '01',
    schedulingTime: '2024-09-09T10:00:00',
    status: 'Confirmado',
    employee: 'John Doe',
    services: 'Sombrancelha',
    user: 'Alice Smith'
  },
  {
    id: '02',
    schedulingTime: '2024-09-09T10:30:00',
    status: 'Pendente',
    employee: 'Jane Williams',
    services: 'Sombrancelha e Limpeza de Pele',
    user: 'Bob Johnson'
  },
  {
    id: '03',
    schedulingTime: '2024-09-09T11:00:00',
    status: 'Cancelado',
    employee: 'James Brown',
    services: 'Sombrancelha',
    user: 'Carol White'
  },
  {
    id: '04',
    schedulingTime: '2024-09-12T15:45:00',
    status: 'Confirmado',
    employee: 'Emily Davis',
    services: 'Sombrancelha e Limpeza de Pele',
    user: 'David Green'
  },
  {
    id: '05',
    schedulingTime: '2024-09-13T11:00:00',
    status: 'Pendente',
    employee: 'Michael Johnson',
    services: 'Sombrancelha',
    user: 'Eve Black'
  },
  {
    id: '06',
    schedulingTime: '2024-09-14T16:00:00',
    status: 'Confirmado',
    employee: 'Sarah Miller',
    services: 'Sombrancelha',
    user: 'Frank Gray'
  },
  {
    id: '07',
    schedulingTime: '2024-09-15T13:30:00',
    status: 'Cancelado',
    employee: 'Chris Wilson',
    services: 'Limpeza de Pele',
    user: 'Grace Brown'
  },
  {
    id: '08',
    schedulingTime: '2024-09-16T09:00:00',
    status: 'Pendente',
    employee: 'Sophia Taylor',
    services: 'Sombrancelha e Limpeza de Pele',
    user: 'Henry White'
  },
  {
    id: '09',
    schedulingTime: '2024-09-16T09:00:00',
    status: 'Confirmado',
    employee: 'Sophia Taylor',
    services: 'Sombrancelha e Limpeza de Pele',
    user: 'Eve Black'
  },
  {
    id: '10',
    schedulingTime: '2024-09-16T09:00:00',
    status: 'Confirmado',
    employee: 'Sophia Taylor',
    services: 'Limpeza de Pele',
    user: 'Henry White'
  },
  {
    id: '10',
    schedulingTime: '2024-09-16T09:00:00',
    status: 'Confirmado',
    employee: 'Sophia Taylor',
    services: 'Limpeza de Pele',
    user: 'Henry White'
  },
  {
    id: '10',
    schedulingTime: '2024-09-16T09:00:00',
    status: 'Confirmado',
    employee: 'Sophia Taylor',
    services: 'Limpeza de Pele',
    user: 'Henry White'
  },
  {
    id: '10',
    schedulingTime: '2024-09-16T09:00:00',
    status: 'Confirmado',
    employee: 'Sophia Taylor',
    services: 'Limpeza de Pele',
    user: 'Henry White'
  },
]

export const BookingTable = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    }
  })

  return (
    <Card className="py-4 mt-4 rounded-md">
      <Toolbar table={table}/>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="py-1.5 font-normal" key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                Sem resultados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination table={table} />
    </Card>
  )
}