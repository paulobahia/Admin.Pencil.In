import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ArrowDownUp } from "lucide-react"

export const OrderBy = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="h-8 border-dashed"
          type="button"
        >
          <ArrowDownUp className="w-4 h-4 mr-2" />
          Ordernar por
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[250px] px-0">
        <div className="px-3 py-1">
          <span className="text-xs text-foreground">Ordernar por</span>
        </div>
        <Separator className="my-1.5" />
        <div className="flex flex-col items-start px-3 py-1 gap-y-3">
          <span className="text-xs text-muted-foreground">Data de Criação</span>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="increasing" id="r1" />
              <Label htmlFor="r1">Crescente</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="decreasing" id="r2" />
              <Label htmlFor="r2">Decrescente</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator className="my-1.5" />
        <div className="flex flex-col items-start px-3 py-1 gap-y-3">
          <span className="text-xs text-muted-foreground">Status</span>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="archived" id="r3" />
              <Label htmlFor="r3">Próximo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="archived" id="r3" />
              <Label htmlFor="r3">Pendente</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="archived" id="r3" />
              <Label htmlFor="r3">Constante</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="archived" id="r3" />
              <Label htmlFor="r3">Anteriores</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator className="my-1.5" />
        <div className="flex flex-col items-start px-3 py-1 gap-y-3">
          <span className="text-xs text-muted-foreground">Nome</span>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="A-Z" id="r1" />
              <Label htmlFor="r1">A-Z</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Z-A" id="r2" />
              <Label htmlFor="r2">Z-A</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator className="my-1.5" />
        <div className="flex flex-row items-center justify-between px-2 py-1.5">
          <Button size="sm" variant="outline" className="h-8">
            Limpar
          </Button>
          <Button size="sm" variant="default" className="h-8 text-white bg-violet-700 hover:bg-violet-600">
            Filtrar
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}