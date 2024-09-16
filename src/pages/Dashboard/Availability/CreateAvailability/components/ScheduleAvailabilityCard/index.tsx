import { ISetupWeek, TimePeriod } from "@/components/types"
import { Card, CardContent } from "@/components/ui/card"
import { WeekDayItem } from "@/components/WeekDayItem"
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

export const ScheduleAvailabilityCard = () => {
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
    <Card className="w-full pt-6 mx-5 rounded-md sm:mx-auto">
      <CardContent className="px-3 space-y-5 w-fit bg-r sm:px-6">
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
  )
}