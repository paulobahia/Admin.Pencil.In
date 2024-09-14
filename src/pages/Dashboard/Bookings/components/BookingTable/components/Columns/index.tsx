import { Checkbox } from "@/components/ui/checkbox";
import { Booking } from "@/pages/Dashboard/Bookings/types";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from 'dayjs';
import { RowAction, ColumnHeader } from "./components";

export const columns: ColumnDef<Booking>[] = [
  {
    id: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "employee",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Funcionário" />
    ),
  },
  {
    accessorKey: "schedulingTime",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Data" />
    ),
    cell: ({ row }) => <div>{dayjs(row.getValue("schedulingTime")).format('DD/MM/YYYY')}</div>,
  },
  {
    accessorKey: "user",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Clientes" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status")
      switch (status) {
        case 'Pendente':
          return (
            <div className="flex flex-row items-center gap-2">
              <span className="bg-gray-500 rounded-full animate-pulse size-2" />
              <span className="text-[13px] font-medium">{status}</span>
            </div>
          )
        case 'Confirmado':
          return (
            <div className="flex flex-row items-center gap-2">
              <span className="bg-green-500 rounded-full animate-pulse size-2" />
              <span className="text-[13px] font-medium">{status}</span>
            </div>
          )
        case 'Cancelado':
          return (
            <div className="flex flex-row items-center gap-2">
              <span className="bg-red-500 rounded-full animate-pulse size-2" />
              <span className="text-[13px] font-medium">{status}</span>
            </div>
          )
      }
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "services",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Procedimentos" />
    ),
  },
  {
    accessorKey: "actions",
    header: '',
    cell: ({ row }) => <RowAction row={row} />,
    enableSorting: false,
    enableHiding: false,
  }
]