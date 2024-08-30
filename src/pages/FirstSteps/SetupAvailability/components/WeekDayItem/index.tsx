import { Switch } from "@/components/ui/switch";
import { ISetupWeek } from "../../types";
import { Label } from "@/components/ui/label";
import { CircleMinus, CirclePlus, Copy, Dot, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TimeInput } from "@/components";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface WeekDayItemProps {
  day: ISetupWeek;
  onToggle: (id: number) => void;
  onTimeChange: (weekId: number, timeIndex: number, field: 'startTime' | 'endTime', newValue: string) => void;
  onAddTime: (weekId: number) => void;
  onDeleteTime: (weekId: number, timeIndex: number) => void;
}

export const WeekDayItem: React.FC<WeekDayItemProps> = ({ day, onToggle, onTimeChange, onAddTime, onDeleteTime }) => {
  const { id, label, enabled, times } = day;

  const isAddTimeDisabled = times.length >= 2

  return (
    <div key={id} className={`grid grid-cols-3 gap-3 ${times.length >= 2 && 'items-start'}`}>
      <div className="flex items-center space-x-2 w-[150px] col-span-3 sm:col-span-1">
        <Switch onCheckedChange={() => onToggle(id)} checked={enabled} id={`switch-${id}`} />
        <Label htmlFor={`switch-${id}`}>{label}</Label>
      </div>
      {
        enabled &&
        <div className="flex items-center col-span-3 sm:col-span-2 gap-x-2">
          <div className="flex flex-col col-span-3 sm:col-span-2 gap-y-2">
            {times.map(({ id: timeId, startTime, endTime }, timeIndex) => (
              <div key={timeId} className="flex items-center gap-2">
                <TimeInput
                  value={startTime}
                  onChange={(value) => onTimeChange(id, timeIndex, 'startTime', value)} />
                <Dot className="w-[20%]" />
                <TimeInput
                  value={endTime}
                  onChange={(value) => onTimeChange(id, timeIndex, 'endTime', value)} />
                {
                  timeIndex === 1
                    ?
                    <Button onClick={() => onDeleteTime(id, timeIndex)} size={'icon'} className="px-2.5 hover:bg-destructive/90" variant={'ghost'}>
                      <Trash className="size-5" />
                    </Button>
                    :
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size={'icon'} className="px-2.5" variant={'ghost'}>
                          <MoreHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuGroup>
                          <DropdownMenuItem disabled={isAddTimeDisabled} onClick={() => onAddTime(id)} className="items-center">
                            <CirclePlus className="w-4 h-4 mr-2" />
                            <span>Adicionar hórario</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="items-center">
                            <Copy className="w-4 h-4 mr-2" />
                            <span>Copiar hórario</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => onToggle(id)} className="items-center">
                          <CircleMinus className="w-4 h-4 mr-2" />
                          <span>Desabilitar hórario</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                }
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}