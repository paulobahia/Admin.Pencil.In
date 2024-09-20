import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, Check, Copy, Ellipsis, ExternalLink, Link, Pencil, Trash } from "lucide-react"

export const StudioModelList = () => {
  return (
    <div className="mt-6 max-h-[79vh] overflow-auto no-scrollbar">
      <Card className="flex flex-row items-center justify-between px-6 py-5 border-b-0 rounded-md rounded-t-none rounded-b-none cursor-pointer hover:bg-foreground/5 first:rounded-t-md last:rounded-b-md last:border-b">
        <div className="flex flex-col items-start gap-y-3">
          <div className="flex flex-row items-center gap-x-1">
            <span className="text-sm font-semibold">
              Modelo Barber Shop
            </span>
            <span className="text-xs font-normal text-muted-foreground">
              /barber-shop-vzj25
            </span>
          </div>
          <div className="flex flex-row gap-x-2">
            <Badge variant={'outline'} className="flex flex-row items-center px-2 text-white rounded-sm gap-x-1 bg-muted">
              <Calendar size={15} />
              <span>
                Seg - Sáb
              </span>
            </Badge>
            <Badge variant={'outline'} className="text-white bg-green-900 rounded-sm">
              Ativo
            </Badge>
          </div>
        </div>
        <div className="flex flex-row">
          <Button size={'icon'} variant={'outline'} className="flex items-center justify-center border-r-0 rounded-r-none">
            <ExternalLink size={18} />
          </Button>
          <Button size={'icon'} variant={'outline'} className="flex items-center justify-center rounded-l-none rounded-r-none">
            <Link size={18} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size={'icon'} variant={'outline'} className="flex items-center justify-center">
                <Ellipsis size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="gap-x-2">
                <Check size={16} />
                <span>
                  Ativar modelo
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-x-2">
                <Pencil size={16} />
                <span>
                  Editar
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
        </div>
      </Card>
    </div>
  )
}