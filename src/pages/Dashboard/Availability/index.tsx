import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Ellipsis } from "lucide-react"

export const Availability = () => {
  return (
    <Dialog>
      <main className="flex flex-col flex-1 antialiased bg-background">
        <div>
          <p className="text-xl font-semibold">
            Disponibilidade
          </p>
          <span className="text-sm font-normal text-muted-foreground">
            Gerencie os horários em que você e o seu estúdio estaram disponiveis para agendamento.
          </span>
        </div>
        <div className="flex justify-end">
          <DialogTrigger asChild>
            <Button>
              Adicionar
            </Button>
          </DialogTrigger>
        </div>
        <div className="mt-6 max-h-[79vh] overflow-auto no-scrollbar">
          {
            Array.from({ length: 3 }).map((_, index) => {
              return (
                <Card key={index} className="flex flex-row items-center justify-between px-6 py-5 rounded-md rounded-t-none rounded-b-none cursor-pointer hover:bg-foreground/5 first:rounded-t-md last:rounded-b-md">
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
                      <DropdownMenuItem>Definir como padrão</DropdownMenuItem>
                      <DropdownMenuItem>Duplicar</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive-foreground focus:bg-destructive/90">
                        Remover
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Card>
              )
            })
          }
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar nova disponibilidade</DialogTitle>
            <DialogDescription>
              O nome informado servirá para identificar o grupo de horários em que você estará disponível.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-3">
            <Label htmlFor="name" className="text-left">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Hórarios de agendamento"
              className="col-span-3"
            />
          </div>
          <DialogFooter className="flex items-center w-full gap-2 sm:justify-between">
            <Button className="w-full sm:w-fit" variant={'outline'}>Cancelar</Button>
            <Button className="w-full sm:w-fit">Continuar</Button>
          </DialogFooter>
        </DialogContent>
      </main>
    </Dialog>
  )
}