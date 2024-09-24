import { TooltipButton } from "@/components"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Trash, Zap, Link, Pencil, MoreHorizontal } from "lucide-react"

export const AutomationList = () => {
  return (
    <div className="mt-6 max-h-[79vh] overflow-auto no-scrollbar">
      {
        Array.from({ length: 1 }).map((_, index) => {
          return (
            <Card key={index} className="flex flex-row items-center justify-between p-4 border-b-0 rounded-md rounded-t-none rounded-b-none cursor-pointer md:px-6 md:py-5 hover:bg-foreground/5 first:rounded-t-md last:rounded-b-md last:border-b">
              <div className="flex flex-col items-start gap-1">
                <div className="flex flex-col justify-start md:gap-1 md:items-center md:flex-row">
                  <span className="text-sm font-semibold">
                    Automação Padrão
                  </span>
                  <span className="text-sm font-normal text-muted-foreground">
                    (Enviar e-mail para o cliente e o(a) fúncionario(a))
                  </span>
                </div>
                <div className="flex flex-col gap-2 md:items-center md:flex-row">
                  <Badge variant={'outline'} className="flex flex-row items-center px-2 text-white rounded-sm gap-x-1 bg-muted">
                    <Zap size={14} />
                    Disparado após o cancelamento do agendamento
                  </Badge>
                  <Badge variant={'outline'} className="flex-row items-center hidden px-2 text-white rounded-sm md:flex gap-x-1 bg-muted">
                    <Link size={14} />
                    Associado á 1 modelo
                  </Badge>
                </div>
              </div>
              <div className="flex-row hidden md:flex">
                <TooltipButton className="border-r-0 rounded-r-none" description="Editar" icon={<Pencil size={18} />} variant="outline" />
                <TooltipButton className="border-l-0 rounded-l-none" description="Remover" icon={<Trash size={18} />} variant="destructive" />
              </div>
              <TooltipButton className="flex md:hidden" description="Detalhes" icon={<MoreHorizontal size={18} />} variant="outline" />
            </Card>
          )
        })
      }
    </div>
  )
}