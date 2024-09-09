import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getDayOfWeekInEnglish } from "@/utils/getDayOfWeek"
import { getDate, getHours, getMinutes } from "date-fns"
import { Circle, CircleCheck, CirclePlus, Clock, Logs, Table2 } from "lucide-react"
import { useState } from "react"
import { BookingTable } from "./components/BookingTable"

const FakeBookings = [
  {
    schedulingTime: '2024-09-09T10:00:00',
    status: 'Confirmado',
    statusIcon: <CircleCheck size={18} />,
    employee: 'John Doe',
    services: 'Sombrancelha',
    user: 'Alice Smith'
  },
  {
    schedulingTime: '2024-09-09T10:30:00',
    status: 'Pendente',
    statusIcon: <Circle size={18} />,
    employee: 'Jane Williams',
    services: 'Sombrancelha e Limpeza de Pele',
    user: 'Bob Johnson'
  },
  {
    schedulingTime: '2024-09-09T11:00:00',
    status: 'Cancelado',
    statusIcon: <CirclePlus className="rotate-45" size={18} />,
    employee: 'James Brown',
    services: 'Sombrancelha',
    user: 'Carol White'
  },
  {
    schedulingTime: '2024-09-12T15:45:00',
    status: 'Confirmado',
    statusIcon: <CircleCheck size={18} />,
    employee: 'Emily Davis',
    services: 'Sombrancelha e Limpeza de Pele',
    user: 'David Green'
  },
  {
    schedulingTime: '2024-09-13T11:00:00',
    status: 'Pendente',
    statusIcon: <Circle size={18} />,
    employee: 'Michael Johnson',
    services: 'Sombrancelha',
    user: 'Eve Black'
  },
  {
    schedulingTime: '2024-09-14T16:00:00',
    status: 'Confirmado',
    statusIcon: <CircleCheck size={18} />,
    employee: 'Sarah Miller',
    services: 'Sombrancelha',
    user: 'Frank Gray'
  },
  {
    schedulingTime: '2024-09-15T13:30:00',
    status: 'Cancelado',
    statusIcon: <CirclePlus className="rotate-45" size={18} />,
    employee: 'Chris Wilson',
    services: 'Limpeza de Pele',
    user: 'Grace Brown'
  },
  {
    schedulingTime: '2024-09-16T09:00:00',
    status: 'Pendente',
    statusIcon: <Circle size={18} />,
    employee: 'Sophia Taylor',
    services: 'Sombrancelha',
    user: 'Henry White'
  }
]

export const Bookings = () => {
  const [previewMode, setPreviewMode] = useState('list')

  const PreviewMode = () => {
    switch (previewMode) {
      case 'list':
        return (
          <div className="mt-6 space-y-3 max-h-[79vh] overflow-auto no-scrollbar">
            {
              FakeBookings.map(({ employee, schedulingTime, services, status, statusIcon }, index) => {
                return (
                  <Card key={index} className="flex flex-row items-center justify-between p-5">
                    <div className="flex flex-row items-center space-x-4">
                      <div className="flex flex-col items-center text-[#E55120] w-14">
                        <span className="font-medium text-1xl">
                          {getDayOfWeekInEnglish(new Date(schedulingTime))}
                        </span>
                        <span className="text-5xl font-semibold">
                          {getDate(schedulingTime)}
                        </span>
                      </div>
                      <Separator orientation="vertical" className="h-16" />
                      <div className="flex items-center">
                        <div className="flex flex-col w-80 gap-y-3">
                          <div className="flex flex-row items-center gap-x-1">
                            <Clock size={18} />
                            <span className="text-sm font-semibold">
                              {getHours(schedulingTime)}:{getMinutes(schedulingTime).toString().padStart(2, '0')}h
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-x-1">
                            {statusIcon}
                            <span className="text-sm font-semibold">
                              {status}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                          <div className="flex gap-1">
                            <span className="text-sm font-medium">
                              {services}
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-x-2">
                            <Avatar className="size-6">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-xs">JM</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-normal">
                              {employee}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="flex items-center justify-center gap-x-1">
                      Detalhes
                    </Button>
                  </Card>
                )
              })
            }
          </div>
        )
      case 'table':
        return (
          <BookingTable />
        )
    }
  }

  return (
    <main className="flex flex-col flex-1 antialiased bg-background">
      <div>
        <p className="text-xl font-semibold">
          Agendamentos
        </p>
        <span className="text-sm font-normal text-foreground">
          Gerencie os agendamentos do seu estabelecimento de forma fácil e eficiente
        </span>
      </div>
      <div className={`flex flex-row ${previewMode == 'list' ? 'justify-between' : 'justify-end'}`}>
        {
          previewMode == 'list'
          &&
          <Tabs className="mt-6" defaultValue="1">
            <TabsList>
              <TabsTrigger value="1">Todos</TabsTrigger>
              <TabsTrigger value="2">Próximo</TabsTrigger>
              <TabsTrigger value="3">Pendente</TabsTrigger>
              <TabsTrigger value="4">Anteriores</TabsTrigger>
              <TabsTrigger value="5">Cancelados</TabsTrigger>
            </TabsList>
          </Tabs>
        }
        <Tabs onValueChange={(value) => setPreviewMode(value)} className="mt-6" defaultValue={previewMode}>
          <TabsList>
            <TabsTrigger value="list"><Logs size={18} /></TabsTrigger>
            <TabsTrigger value="table"><Table2 size={18} /></TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <PreviewMode />
    </main>
  )
}