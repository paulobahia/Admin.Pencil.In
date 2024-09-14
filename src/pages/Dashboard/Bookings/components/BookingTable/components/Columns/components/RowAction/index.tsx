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
import { Ellipsis } from "lucide-react"
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
        <div className="w-full">
          <DropdownMenuItem>Detalhes</DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={booking.status} className="flex flex-col">
              <div>
                <DropdownMenuRadioItem value={'Confirmado'}>
                  Confirmado
                </DropdownMenuRadioItem>
              </div>
              <div>
                <DropdownMenuRadioItem value={'Pendente'}>
                  Pendente
                </DropdownMenuRadioItem>
              </div>
              <div>
                <DropdownMenuRadioItem value={'Cancelado'}>
                  Cancelado
                </DropdownMenuRadioItem>
              </div>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <div>
          <DropdownMenuItem className="flex gap-x-2">
            Remover
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}