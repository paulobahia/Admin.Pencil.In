import { Card } from "@/components/ui/card"
import { ChevronRight, LucideLineChart, Zap } from "lucide-react"
import { NavDasboardItem } from "../types"
import { Link } from "react-router-dom"

const moreItens: NavDasboardItem[] = [
  {
    label: 'Automações',
    path: '/automations',
    icon: <Zap size={16} />
  },
  {
    label: 'Análise',
    path: '/insights',
    icon: <LucideLineChart size={16} />
  }
]

export const More = () => {
  return (
    <main className="flex flex-col flex-1 antialiased bg-background group">
      {moreItens.map(({ path, label, icon }) => (
        <Link key={path} to={path}>
          <Card className="flex flex-row items-center justify-between p-5 border-b rounded-none cursor-pointer text-muted-foreground hover:bg-foreground/5">
            <div className="flex flex-row items-center gap-x-2">
              {icon}
              <span className="text-sm font-semibold">
                {label}
              </span>
            </div>
            <ChevronRight size={16} />
          </Card>
        </Link>
      )
      )}
      <span className="mt-3 text-xs leading-tight text-muted-foreground">
        Pense na nossa aplicação móvel como uma pequena extensão do nosso aplicativo web. Para realizar ações mais complexas, utilize a versão web.
      </span>
    </main>
  )
}