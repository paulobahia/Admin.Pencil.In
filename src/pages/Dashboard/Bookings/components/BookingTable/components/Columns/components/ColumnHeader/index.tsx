import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { Column } from "@tanstack/react-table"
import { ArrowDownIcon, ArrowUpIcon, ChevronDown, ChevronsUpDown, ChevronUp, EyeOff } from "lucide-react"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function ColumnHeader<TData, TValue>({ column, title, className }: DataTableColumnHeaderProps<TData, TValue>) {

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ChevronDown className="size-3.5 ml-2" />
            ) : column.getIsSorted() === "asc" ? (
              <ChevronUp className="size-3.5 ml-2" />
            ) : (
              <ChevronsUpDown className="ml-2 size-3.5" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem className="flex items-center p-1 text-sm rounded-sm cursor-pointer hover:bg-accent hover:text-accent-foreground" onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Cres
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center p-1 text-sm rounded-sm cursor-pointer hover:bg-accent hover:text-accent-foreground" onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Decr
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center p-1 text-sm rounded-sm cursor-pointer hover:bg-accent hover:text-accent-foreground" onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Ocultar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}