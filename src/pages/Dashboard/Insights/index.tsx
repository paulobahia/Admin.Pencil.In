import { Dialog } from "@/components/ui/dialog"
import {
  LastAppointmentTable,
  LatestAutomationsTable,
  PopularEmployeesTable,
  PopularProceduresTable,
  ReturningCustomersTable,
  SchedulesCanceledChart,
  SchedulesChart,
  SchedulesCompletedChart,
  SchedulesCreatedChart
} from "./components"

export const Insights = () => {
  return (
    <Dialog>
      <main className="flex flex-col flex-1 antialiased gap-y-3 bg-background max-h-[95vh] overflow-x-hidden overflow-y-auto no-scrollbar">
        <div>
          <p className="text-xl font-semibold">
            Análise
          </p>
          <span className="text-sm font-normal text-muted-foreground">
            Acompanhe o andamento do seu estúdio de forma clara e dinâmica! Apartir de gráficos interrativos.
          </span>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <SchedulesCreatedChart />
          <SchedulesCompletedChart />
          <SchedulesCanceledChart />
        </div>
        <div className="grid w-full grid-cols-1">
          <SchedulesChart />
        </div>
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
          <PopularProceduresTable />
          <PopularEmployeesTable />
        </div>
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
          <ReturningCustomersTable />
          <LastAppointmentTable />
        </div>
        <div className="grid w-full grid-cols-1">
          <LatestAutomationsTable />
        </div>
      </main>
    </Dialog>
  )
}