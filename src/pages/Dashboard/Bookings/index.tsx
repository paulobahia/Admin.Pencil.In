import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Logs, Table2 } from "lucide-react"
import { useState } from "react"
import { BookingTable } from "./components/BookingTable"
import { BookingList } from "./components/BookingList"

export const Bookings = () => {
  const [previewMode, setPreviewMode] = useState('list')

  return (
    <main className="flex flex-col flex-1 antialiased bg-background">
      <div>
        <p className="text-xl font-semibold">
          Agendamentos
        </p>
        <span className="text-sm font-normal text-muted-foreground">
          Gerencie os agendamentos do seu estúdio de forma fácil e eficiente
        </span>
      </div>
      <div className={`flex flex-row ${previewMode == 'list' ? 'sm:justify-between justify-center' : 'justify-end'}`}>
        {
          previewMode == 'list'
          &&
          <Tabs className="mt-6 xs:flex" defaultValue="1">
            <TabsList>
              <TabsTrigger value="1">Todos</TabsTrigger>
              <TabsTrigger value="2">Próximo</TabsTrigger>
              <TabsTrigger value="3">Pendente</TabsTrigger>
              <TabsTrigger className="hidden xs:flex" value="4">Anteriores</TabsTrigger>
              <TabsTrigger value="5">Cancelados</TabsTrigger>
            </TabsList>
          </Tabs>
        }
        <Tabs onValueChange={(value) => setPreviewMode(value)} className="hidden mt-6 md:flex" defaultValue={previewMode}>
          <TabsList>
            <TabsTrigger value="list"><Logs size={18} /></TabsTrigger>
            <TabsTrigger value="table"><Table2 size={18} /></TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {previewMode === 'list' && <BookingList />}
      {previewMode === 'table' && <BookingTable />}
    </main>
  )
}