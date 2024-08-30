import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { ISetupWeek, TimePeriod } from "./types"
import { StepIndicator, WeekDayItem } from "./components"

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

export const SetupAvailability = () => {
  const [weeks, setWeeks] = useState([...SetupWeek])

  function toggleSwitch(id: number) {
    setWeeks(prevWeeks =>
      prevWeeks.map(week =>
        week.id === id
          ? { ...week, enabled: !week.enabled }
          : week
      )
    );
  }

  const handleTimeChange = (weekIndex: number, timeIndex: number, field: 'startTime' | 'endTime', newValue: string) => {
    const updatedSetupWeeks = weeks.map((week, wIndex) =>
      wIndex === weekIndex
        ? {
          ...week,
          times: week.times.map((timePeriod, tIndex) =>
            tIndex === timeIndex ? { ...timePeriod, [field]: newValue } : timePeriod
          ),
        }
        : week
    );

    setWeeks(updatedSetupWeeks);
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
    <main className="flex items-center justify-center min-h-screen antialiased bg-background">
      <div className="w-full max-w-xl mx-auto space-y-10 text-center">
        <div className="flex flex-col items-start px-12">
          <h1 className="mb-2 text-3xl font-bold">
            Estabelecer Disponibilidade
          </h1>
          <p className="mb-6 text-sm text-left text-muted-foreground">Configure os períodos em que estará disponível. Você poderá ajustar essas preferências posteriormente na seção de disponibilidade.</p>
          <div className="w-full max-w-md">
            <p className="mb-3 text-xs font-medium text-left text-muted-foreground">Step 3 de 3</p>
            <StepIndicator currentStep={3} />
          </div>
        </div>
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