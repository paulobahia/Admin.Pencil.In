import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { CartesianGrid, XAxis, Bar, BarChart } from "recharts"

const chartData = [
  { date: "2024-07-01", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-02", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-03", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-04", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-05", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-06", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-07", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-08", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-09", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-10", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-11", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-12", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-13", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-14", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-15", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-16", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-17", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-18", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-19", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-20", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-21", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-22", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-23", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-24", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-25", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-26", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-27", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-28", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-29", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-07-30", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-01", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-02", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-03", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-04", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-05", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-06", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-07", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-08", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-09", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-10", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-11", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-12", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-13", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-14", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-15", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-16", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-17", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-18", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-19", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-20", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-21", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-22", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-23", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-24", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-25", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-26", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-27", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-28", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-29", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-08-30", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-01", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-02", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-03", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-04", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-05", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-06", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-07", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-08", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-09", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-10", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-11", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-12", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-13", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-14", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-15", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-16", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-17", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-18", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-19", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-20", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-21", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-22", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-23", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-24", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-25", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-26", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-27", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-28", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-29", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
  { date: "2024-09-30", created: Math.floor(Math.random() * 500) + 50, completed: Math.floor(Math.random() * 500) + 50, canceled: Math.floor(Math.random() * 150) + 5 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  created: {
    label: "Criado",
    color: "hsl(var(--chart-1))",
  },
  completed: {
    label: "Finalizado",
    color: "hsl(var(--chart-5))",
  },
  canceled: {
    label: "Cancelado",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export const SchedulesChart = () => {
  const [timeRange, setTimeRange] = useState("7d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    console.log("date", date)
    console.log("now", now)
    return date >= now
  })

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between p-4">
        <div>
          <CardTitle className="text-lg">Agendamentos</CardTitle>
          <span className="text-xs text-muted-foreground">Total de agendamentos criados, finalizados e cancelados no ultimo mês.</span>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Selecione um périodo"
          >
            <SelectValue placeholder="Últimos 3 meses" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Últimos 3 meses
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Últimos 30 dias
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Últimos 7 dias
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("pt-br", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-br", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey="created" fill="var(--color-created)" />
            <Bar dataKey="completed" fill="var(--color-completed)" />
            <Bar dataKey="canceled" fill="var(--color-canceled)" />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}