import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Row } from "@tanstack/react-table"
import { Ellipsis, Trash } from "lucide-react"
import { z } from "zod"

export const statusSchema = z.object({
  id: z.string(),
  employee: z.string(),
  schedulingTime: z.string(),
  status: z.string(),
  user: z.string(),
  services: z.string(),
})

interface RowActionsProps<TData> {
  row: Row<TData>
}

export function RowAction<TData>({ row }: RowActionsProps<TData>) {
  const booking = statusSchema.parse(row.original)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          Detalhes
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={booking.status} className="flex flex-col">
              <DropdownMenuRadioItem value={'Confirmado'}>
                Confirmado
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={'Pendente'}>
                Pendente
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={'Cancelado'}>
                Cancelado
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive-foreground focus:bg-destructive/90 gap-x-2">
          <Trash size={16} />
          <span>
            Remover
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}