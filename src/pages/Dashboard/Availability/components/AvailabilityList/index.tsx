import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Copy, Ellipsis, Star, Trash } from "lucide-react"

export const AvailabilityList = () => {
  return (
    <div className="mt-6 max-h-[79vh] overflow-auto no-scrollbar">
      {
        Array.from({ length: 3 }).map((_, index) => {
          return (
            <Card key={index} className="flex flex-row items-center justify-between px-6 py-5 border-b-0 rounded-md rounded-t-none rounded-b-none cursor-pointer hover:bg-foreground/5 first:rounded-t-md last:rounded-b-md last:border-b">
              <div className="flex flex-col">
                <div className="flex flex-row gap-x-2">
                  <span className="text-sm font-semibold">
                    Hórario de agendamento
                  </span>
                  {
                    index == 0 &&
                    <Badge variant={'outline'} className="text-white bg-green-900 rounded-sm">
                      Padrão
                    </Badge>
                  }
                </div>
                <span className="mt-1 text-sm font-medium text-muted-foreground">
                  Seg - Sex
                </span>
                <span className="mt-1 text-sm font-medium text-muted-foreground">
                  09:00 AM - 21:00 PM
                </span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size={'icon'} variant={'outline'} className="flex items-center justify-center">
                    <Ellipsis size={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="gap-x-2">
                    <Star size={16} />
                    <span>
                      Definir como padrão
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-x-2">
                    <Copy size={16} />
                    <span>
                      Duplicar
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive-foreground focus:bg-destructive/90 gap-x-2">
                    <Trash size={16} />
                    <span>
                      Remover
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Card>
          )
        })
      }
    </div>
  )
}