import { Dialog } from "@/components/ui/dialog"
import { SchedulesCanceledChart, SchedulesCompletedChart, SchedulesCreatedChart } from "./components"

export const Insights = () => {
  return (
    <Dialog>
      <main className="flex flex-col flex-1 antialiased gap-y-3 bg-background">
        <div>
          <p className="text-xl font-semibold">
            Análise
          </p>
          <span className="text-sm font-normal text-muted-foreground">
            Acompanhe o andamento do seu estúdio de forma clara e dinâmica! Apartir de gráficos interrativos.
          </span>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:grid-cols-3">
          <SchedulesCreatedChart />
          <SchedulesCompletedChart />
          <SchedulesCanceledChart />
        </div>
      </main>
    </Dialog>
  )
}