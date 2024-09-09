import { Input } from "@/components/ui/input"
import { Filter, OrderBy } from "./components"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export const Toolbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-4">
      <div className="flex flex-row">
        <Button size={'icon'} className="h-8 border-r-0 rounded-r-none cursor-auto hover:bg-transparent" variant={'outline'}>
          <Search size={'14'} />
        </Button>
        <Input placeholder="Pesquise pelo agendamento" className="h-8 pl-1 text-sm text-white border-l-0 rounded-md rounded-l-none placeholder:text-muted-foreground placeholder:text-xs" />
      </div>
      <div className="flex flex-row gap-x-2">
        <Filter />
        <OrderBy />
      </div>
    </div>
  )
}