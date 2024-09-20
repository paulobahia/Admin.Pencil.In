import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer } from "recharts"

const data = [
  {
    revenue: 0,
  },
  {
    revenue: 100,
  },
  {
    revenue: 20,
  },
  {
    revenue: 80,
  },
  {
    revenue: 50,
  },
  {
    revenue: 200,
  },
  {
    revenue: 150,
  },
]

export const SchedulesCompletedChart = () => {
  return (
    <Card className="relative rounded-lg">
      <CardHeader className="p-4 space-y-0.5">
        <CardTitle className="text-lg">Agendamentos completos</CardTitle>
        <span className="text-xs text-muted-foreground">Total de agendamentos completos no ultimo mês.</span>
      </CardHeader>
      <CardFooter className="flex justify-between p-0">
        <div className="flex flex-col p-4">
          <div className="text-2xl font-medium">193</div>
          <p className="hidden text-xs text-muted-foreground lg:flex">+2.10% ao mês passado</p>
          <p className="flex text-xs text-muted-foreground lg:hidden">+2.10%/mês</p>
        </div>
      </CardFooter>
      <div className="absolute w-1/2 -bottom-1.5 -right-1.5 h-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#15803D" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#15803D" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              strokeWidth={2}
              dataKey="revenue"
              stroke="#15803D"
              fillOpacity={1}
              fill="url(#colorUv2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}