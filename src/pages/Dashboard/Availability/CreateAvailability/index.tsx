import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save, Trash } from "lucide-react"
import { DateExceptionsList, ScheduleAvailabilityCard } from "./components"
import { TooltipButton } from "@/components"
import { Link } from "react-router-dom"

export const CreateAvailability = () => {
  return (
    <main className="flex flex-col flex-1 p-4 antialiased bg-background lg:p-6">
      <div className="flex flex-row items-center gap-x-2">
        <Link to={'/availability'}>
          <Button variant={'ghost'} size={'icon'}>
            <ArrowLeft size={14} />
          </Button>
        </Link>
        <div>
          <p className="text-xl font-semibold">
            Adicionar nova disponibilidade
          </p>
          <span className="text-sm font-normal text-muted-foreground">
            Adicione uma nova disponibilidade de horarios para o seu estúdio.
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-col">
          <span className="text-sm font-bold">
            Hórario de agendamento
          </span>
          <span className="mt-1 text-sm font-medium text-muted-foreground">
            Seg - Sex, 09:00 AM - 21:00 PM
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="items-center hidden gap-x-2 sm:flex">
            <Label>Definir como Padrão</Label>
            <Switch />
          </div>
          <Separator orientation="vertical" className="hidden h-3/5 sm:flex" />
          <TooltipButton description="Remover" variant="destructive" icon={<Trash size={16} />} />
          <Separator orientation="vertical" className="h-3/5" />
          <TooltipButton description="Salvar" variant="default" icon={<Save size={16} />} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-3 mt-5">
        <ScheduleAvailabilityCard />
        <div className="flex flex-col w-full gap-3">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="flex flex-col">
              <span className="text-lg font-medium">
                Exceções de datas
              </span>
              <span className="text-sm font-normal text-muted-foreground">
                Adicione exceções de datas para definir horários específicos que serão aplicados apenas nas datas selecionadas, sem alterar a disponibilidade padrão.
              </span>
            </div>
            <Button className="w-full sm:w-fit">
              Adicionar uma exceção
            </Button>
          </div>
          <DateExceptionsList />
        </div>
      </div>
    </main>
  )
}