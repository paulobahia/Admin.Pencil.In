import { Card } from "@/components/ui/card"
import { ChevronRight, LucideLineChart, Zap } from "lucide-react"

export const More = () => {
  return (
    <main className="flex flex-col flex-1 antialiased bg-background">
      <Card className="flex flex-row items-center justify-between p-5 border-b-0 rounded-md rounded-t-none rounded-b-none cursor-pointer text-muted-foreground hover:bg-foreground/5 first:rounded-t-md last:rounded-b-md last:border-b">
        <div className="flex flex-row items-center gap-x-2">
          <Zap size={16} />
          <span className="text-sm font-semibold">
            Automação
          </span>
        </div>
        <ChevronRight size={16} />
      </Card>
      <Card className="flex flex-row items-center justify-between p-5 border-b-0 rounded-md rounded-t-none rounded-b-none cursor-pointer text-muted-foreground hover:bg-foreground/5 first:rounded-t-md last:rounded-b-md last:border-b">
        <div className="flex flex-row items-center gap-x-2">
          <LucideLineChart size={16} />
          <span className="text-sm font-semibold">
            Análise
          </span>
        </div>
        <ChevronRight size={16} />
      </Card>
      <span className="mt-6 text-xs leading-tight text-muted-foreground">
        Pense na nossa aplicação móvel como uma pequena extensão do nosso aplicativo web. Para realizar ações mais complexas, utilize a versão web.
      </span>
    </main>
  )
}