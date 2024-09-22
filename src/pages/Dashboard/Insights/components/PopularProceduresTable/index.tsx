import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const PopularProceduresTable = () => {
  return (
    <Card>
      <CardHeader className="p-4 space-y-0.5">
        <CardTitle className="text-lg">Procedimentos populares</CardTitle>
        <span className="text-xs text-muted-foreground">Lista dos procedimentos populares do ultimo mês.</span>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-32 text-sm">
        Nenhuma informação encontrada
      </CardContent>
    </Card>
  )
}