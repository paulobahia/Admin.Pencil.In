import { Input } from "@/components/ui/input"
import { Filter } from "./components"
import { Button } from "@/components/ui/button"
import { Circle, CircleCheck, CirclePlus, Search, X } from "lucide-react"
import { Table } from "@tanstack/react-table"
import { ViewOptions } from "./components/ViewOptions"

const statuses = [
  {
    value: "Pendente",
    label: "Pendente",
    icon: Circle,
  },
  {
    value: "Confirmado",
    label: "Confirmado",
    icon: CircleCheck,
  },
  {
    value: "Cancelado",
    label: "Canceledo",
    icon: CirclePlus,
  },
]

interface ToolbarProps<TData> {
  table: Table<TData>
}

export function Toolbar<TData>({ table }: ToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex flex-row items-center w-full p-4 pt-0 gap-x-2">
      <div className="flex flex-row">
        <Button size={'icon'} className="h-8 border-r-0 rounded-r-none cursor-auto hover:bg-transparent" variant={'outline'}>
          <Search size={'14'} />
        </Button>
        <Input
          placeholder="Pesquise pelo funcinário"
          value={(table.getColumn("employee")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("employee")?.setFilterValue(event.target.value)}
          className="h-8 pl-1 text-sm text-white border-l-0 rounded-md rounded-l-none placeholder:text-muted-foreground placeholder:text-xs"
        />
      </div>
      <div className="flex flex-row gap-x-2">
        {table.getColumn("status") && (
          <Filter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="flex flex-row items-center h-8 px-2 lg:px-3"
          >
            Limpar
            <X className="mt-1 ml-2 size-3.5" />
          </Button>
        )}
      </div>
      <ViewOptions table={table} />
    </div>
  )
}