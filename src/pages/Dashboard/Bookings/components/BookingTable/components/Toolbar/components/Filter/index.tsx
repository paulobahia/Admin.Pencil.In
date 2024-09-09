import { format } from 'date-fns'
import { CalendarIcon, ListFilter } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

export const Filter = () => {
  const [date, setDate] = useState<Date>()
  const [isFilterByDate, setIsFilterByDate] = useState<boolean>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="h-8 border-dashed"
          type="button"
        >
          <ListFilter className="w-4 h-4 mr-2" />
          Filtro
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[320px] px-0">
        <div className="flex flex-row px-2 py-1.5 items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Status do Categoria
          </span>
          <Select>
            <SelectTrigger className="gap-2 text-xs h-7 w-fit">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="upcoming">Próximo</SelectItem>
                <SelectItem value="unconfirmed">Pendente</SelectItem>
                <SelectItem value="recurring">Constante</SelectItem>
                <SelectItem value="past">Anteriores</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Separator className="my-1.5" />
        <div className="flex flex-col gap-2 px-2">
          <div className="flex flex-row py-1.5 items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Data de Criação
            </span>
            <Switch
              checked={isFilterByDate}
              onCheckedChange={setIsFilterByDate}
              id="filter-date"
            />
          </div>
          {isFilterByDate && (
            <>
              <Select>
                <SelectTrigger className="w-full h-8 gap-2 text-xs shadow-sm text-foreground hover:text-accent-foreground">
                  <SelectValue placeholder="Filtro por Data" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Antes</SelectItem>
                    <SelectItem value="banana">Entre</SelectItem>
                    <SelectItem value="blueberry">Depois</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full h-8 justify-start text-left text-xs px-2 items-center font-normal text-foreground',
                      !date && 'text-foreground',
                    )}
                  >
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {date ? (
                      format(date, 'PPP')
                    ) : (
                      <span>Selecione uma Data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </>
          )}
        </div>
        <Separator className="my-1.5" />
        <div className="flex flex-row items-center justify-between px-2 py-1.5">
          <Button size="sm" variant="outline" className="h-8">
            Cancelar
          </Button>
          <Button size="sm" variant="default" className="h-8 text-white bg-violet-700 hover:bg-violet-600">
            Filtrar
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}