import { Card, CardContent } from "@/components/ui/card"

export const SetupAvailability = () => {
  return (
    <main className="flex items-center justify-center min-h-screen p-10 antialiased bg-background">
      <div className="w-full max-w-xl mx-auto space-y-10 text-center">
        <div className="flex flex-col items-start px-12">
          <h1 className="mb-2 text-3xl font-bold">
            Estabelecer Disponibilidade
          </h1>
          <p className="mb-6 text-sm text-left text-muted-foreground">Configure os períodos em que estará disponível. Você poderá ajustar essas preferências posteriormente na seção de disponibilidade.</p>
          <div className="w-full max-w-md">
            <p className="mb-3 text-xs font-medium text-left text-muted-foreground">Step 3 de 3</p>
            <div className="flex justify-between gap-3">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-1 w-1/3 ${step == 3 ? 'bg-foreground' : 'bg-muted'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <Card className="pt-6 rounded-md">
          <CardContent>

          </CardContent>
        </Card>
      </div>
    </main>
  )
}