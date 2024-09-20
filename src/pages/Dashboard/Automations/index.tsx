import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"

export const Automations = () => {
  return (
    <Dialog>
      <main className="flex flex-col flex-1 antialiased bg-background">
        <div>
          <p className="text-xl font-semibold">
            Automações
          </p>
          <span className="text-sm font-normal text-muted-foreground">
            Crie e automações de trabalho para auxiliar e agilizar seu processo, elas serviram para notificar ou/e informar os usuarios apos determinados evetos.
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
      </main>
    </Dialog>
  )
}