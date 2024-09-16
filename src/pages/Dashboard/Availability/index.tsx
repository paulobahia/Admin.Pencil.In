import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { AvailabilityList, DialogAddAvailability } from "./components"

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
        <AvailabilityList />
        <DialogAddAvailability />
      </main>
    </Dialog>
  )
}