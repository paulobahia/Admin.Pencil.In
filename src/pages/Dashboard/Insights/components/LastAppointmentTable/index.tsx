import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const LastAppointmentTable = () => {
  return (
    <Card>
      <CardHeader className="p-4 space-y-0.5">
        <CardTitle className="text-lg">Ultimo agendamento</CardTitle>
        <span className="text-xs text-muted-foreground">Lista dos ultimos agendamentos realizados.</span>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-32 text-sm">
        Nenhuma informação encontrada
      </CardContent>
    </Card>
  )
}