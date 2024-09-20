import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { StudioModelList } from "./components"

export const Studio: React.FC = () => {
  return (
    <Dialog>
      <main className="flex flex-col flex-1 antialiased bg-background">
        <div>
          <p className="text-xl font-semibold">
            Meu estúdio
          </p>
          <span className="text-sm font-normal text-muted-foreground">
            Gerencie os modelos do estúdio, esses modelos definem os horarios, automações e processos que seram feitos no pré e pós agendamento.
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
        <StudioModelList />
      </main>
    </Dialog>
  )
}