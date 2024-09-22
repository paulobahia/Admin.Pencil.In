import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const ReturningCustomersTable = () => {
  return (
    <Card>
      <CardHeader className="p-4 space-y-0.5">
        <CardTitle className="text-lg">Clientes recorrentes</CardTitle>
        <span className="text-xs text-muted-foreground">Lista dos clientes com maior recorrencia no ultimo período.</span>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-32 text-sm">
        Nenhuma informação encontrada
      </CardContent>
    </Card>
  )
}