import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { AvailabilityList, DialogAddAvailability } from "./components"
import { Plus } from "lucide-react"

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
        <div className="justify-end hidden sm:flex">
          <DialogTrigger asChild>
            <Button>
              Adicionar
            </Button>
          </DialogTrigger>
        </div>
        <div className="fixed z-40 flex right-5 bottom-20 sm:hidden">
          <DialogTrigger asChild>
            <Button className="rounded-full size-12" size={'icon'}>
              <Plus size={20} />
            </Button>
          </DialogTrigger>
        </div>
        <AvailabilityList />
        <DialogAddAvailability />
      </main>
    </Dialog>
  )
}