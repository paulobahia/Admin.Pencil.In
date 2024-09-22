import { TooltipButton } from "@/components"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Trash, Zap, Link, Pencil } from "lucide-react"

export const AutomationList = () => {
  return (
    <div className="mt-6 max-h-[79vh] overflow-auto no-scrollbar">
      {
        Array.from({ length: 1 }).map((_, index) => {
          return (
            <Card key={index} className="flex flex-row items-center justify-between px-6 py-5 border-b-0 rounded-md rounded-t-none rounded-b-none cursor-pointer hover:bg-foreground/5 first:rounded-t-md last:rounded-b-md last:border-b">
              <div className="flex flex-col items-start gap-y-2">
                <div className="flex flex-row items-center gap-x-1">
                  <span className="text-sm font-semibold">
                    Automação Padrão
                  </span>
                  <span className="text-sm font-normal text-muted-foreground">
                    (Enviar e-mail para o cliente e o(a) fúncionario(a))
                  </span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <Badge variant={'outline'} className="flex flex-row items-center px-2 text-white rounded-sm gap-x-1 bg-muted">
                    <Zap size={14} />
                    Disparado após o cancelamento do agendamento
                  </Badge>
                  <Badge variant={'outline'} className="flex flex-row items-center px-2 text-white rounded-sm gap-x-1 bg-muted">
                    <Link size={14} />
                    Associado á 1 modelo
                  </Badge>
                </div>
              </div>
              <div className="flex flex-row">
                <TooltipButton className="border-r-0 rounded-r-none" description="Editar" icon={<Pencil size={18} />} variant="outline" />
                <TooltipButton className="border-l-0 rounded-l-none" description="Remover" icon={<Trash size={18} />} variant="destructive" />
              </div>
            </Card>
          )
        })
      }
    </div>
  )
}