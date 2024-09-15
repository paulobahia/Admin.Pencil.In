import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { WeekDayItem } from "@/pages/FirstSteps/SetupAvailability/components"
import { ISetupWeek, TimePeriod } from "@/pages/FirstSteps/SetupAvailability/types"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

const SetupWeek: ISetupWeek[] = [
  {
    id: 0,
    label: 'Domingo',
    enabled: false,
    times: [
      {
        id: 0,
        startTime: '',
        endTime: ''
      }
    ]
  },
  {
    id: 1,
    label: 'Segunda-Feira',
    enabled: true,
    times: [
      {
        id: 0,
        startTime: '',
        endTime: ''
      }
    ]
  },
  {
    id: 2,
    label: 'Terça-Feira',
    enabled: true,
    times: [
      {
        id: 0,
        startTime: '',
        endTime: ''
      }
    ]
  },
  {
    id: 3,
    label: 'Quarta-Feira',
    enabled: true,
    times: [
      {
        id: 0,
        startTime: '',
        endTime: ''
      }
    ]
  },
  {
    id: 4,
    label: 'Quinta-Feira',
    enabled: true,
    times: [
      {
        id: 0,
        startTime: '',
        endTime: ''
      }
    ]
  },
  {
    id: 5,
    label: 'Sexta-Feira',
    enabled: true,
    times: [
      {
        id: 0,
        startTime: '',
        endTime: ''
      }
    ]
  },
  {
    id: 6,
    label: 'Sábado',
    enabled: false,
    times: [
      {
        id: 0,
        startTime: '',
        endTime: ''
      }
    ]
  }
]

export const CreateAvailability = () => {
  const [weeks, setWeeks] = useState([...SetupWeek])

  const toggleSwitch = (id: number) => {
    setWeeks(prevWeeks =>
      prevWeeks.map(week =>
        week.id === id
          ? { ...week, enabled: !week.enabled }
          : week
      )
    );
  }

  const handleTimeChange = (weekId: number, timeIndex: number, field: 'startTime' | 'endTime', newValue: string) => {
    setWeeks((prevWeeks) => {
      return prevWeeks.map((week) => {
        if (week.id === weekId) {
          const updatedTimes = week.times.map((timePeriod, tIndex) =>
            tIndex === timeIndex ? { ...timePeriod, [field]: newValue } : timePeriod
          );

          return {
            ...week,
            times: updatedTimes,
          };
        }
        return week;
      });
    });
  };

  const handleAddTime = (weekId: number) => {
    setWeeks((prevWeeks) => {
      return prevWeeks.map((week) => {
        if (week.id === weekId) {
          const newTimePeriod: TimePeriod = {
            id: week.times.length > 0 ? Math.max(...week.times.map(t => t.id)) + 1 : 0,
            startTime: '',
            endTime: '',
          };

          return {
            ...week,
            times: [...week.times, newTimePeriod],
          };
        }
        return week;
      });
    });
  };

  const handleDeleteTime = (weekId: number, timeIndex: number) => {
    setWeeks((prevWeeks) => {
      return prevWeeks.map((week) => {
        if (week.id === weekId) {
          const updatedTimes = week.times.filter((_, index) => index !== timeIndex);

          return {
            ...week,
            times: updatedTimes,
          };
        }
        return week;
      });
    });
  };

  return (
    <main className="flex flex-col flex-1 antialiased bg-background">
      <div className="flex flex-row items-center gap-x-2">
        <Button variant={'ghost'} size={'icon'}>
          <ArrowLeft size={14} />
        </Button>
        <div>
          <p className="text-xl font-semibold">
            Adicionar nova disponibilidade
          </p>
          <span className="text-sm font-normal text-muted-foreground">
            Adicione uma nova disponibilidade de horarios para o seu estúdio.
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex flex-col">
          <span className="text-sm font-bold">
            Hórario de agendamento
          </span>
          <span className="mt-1 text-sm font-medium text-muted-foreground">
            Seg - Sex, 09:00 AM - 21:00 PM
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <Label>Definir como Padrão</Label>
            <Switch />
          </div>
          <Separator orientation="vertical" className="h-3/5" />
          <Button className="text-destructive-foreground hover:bg-destructive/90" variant={'outline'}>
            Remover
          </Button>
          <Separator orientation="vertical" className="h-3/5" />
          <Button>
            Salvar
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 ">
        <Card className="pt-6 mx-5 rounded-md sm:mx-auto">
          <CardContent className="px-3 space-y-5 sm:px-6">
            {weeks.map(day => (
              <WeekDayItem
                key={day.id}
                day={day}
                onToggle={toggleSwitch}
                onTimeChange={handleTimeChange}
                onAddTime={handleAddTime}
                onDeleteTime={handleDeleteTime}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}