import { Input } from "@/components/ui/input"
import { Filter, OrderBy } from "./components"

export const Toolbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-4">
      <div className="flex flex-row gap-x-2">
        <Input placeholder="Pesquise pelo agendamento" className="h-8 text-sm text-white rounded-md placeholder:text-muted-foreground placeholder:text-xs" />
      </div>
      <div className="flex flex-row gap-x-2">
        <Filter />
        <OrderBy />
      </div>
    </div>
  )
}