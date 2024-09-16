import { TooltipButton } from "@/components"
import { Card } from "@/components/ui/card"
import { Pencil, Trash } from "lucide-react"

export const DateExceptionsList = () => {
  return (
    <div className="flex flex-col overflow-auto max-h-52 no-scrollbar">
      {
        Array.from({ length: 5 }).map((_, index) => {
          return (
            <Card key={index} className="flex flex-row items-center justify-between p-4 border-b-0 rounded-t-none rounded-b-none last:border-b first:rounded-t-md last:rounded-b-md">
              <div className="flex flex-col gap-y-1">
                <span className="text-sm">
                  Hórario de agendamento
                </span>
                <span className="text-xs text-muted-foreground">
                  Seg - Sex, 09:00 AM - 21:00 PM
                </span>
              </div>
              <div className="flex flex-row gap-x-2">
                <TooltipButton variant="outline" description="Editar" icon={<Pencil size={16} />} />
                <TooltipButton variant="outline" description="Remover exceção" icon={<Trash size={16} />} />
              </div>
            </Card>
          )
        })
      }
    </div>
  )
}
