import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CheckIcon } from "lucide-react"
import { useState } from "react"
import { AccountSetupAccordion, PaymentDetails, ProfileDescriptionAccordion } from "./components"

export const Welcome = () => {
  const [selectedPlan, setSelectedPlan] = useState("annual")

  return (
    <main className="flex items-center justify-center min-h-screen antialiased bg-background">
      <div className="container mx-auto p-4 max-w-[1440px]">
        <h1 className="mb-2 text-3xl font-bold">Bem-Vindo(a) à Pencil.In!</h1>
        <p className="mb-6 text-muted-foreground">Nós informe alguns dados básicos para que possamos configurar o seu perfil do <b>Pelcin.In</b></p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <AccountSetupAccordion />
            <ProfileDescriptionAccordion />
            <PaymentDetails />
          </div>
          <div className="space-y-6 md:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold">Plano Individual</h2>
                </div>
                <RadioGroup
                  value={selectedPlan}
                  onValueChange={setSelectedPlan}
                  className="space-y-2"
                >
                  <div className={`flex items-center space-x-2 border rounded-lg p-4 ${selectedPlan === 'annual' ? 'bg-secondary' : ''}`}>
                    <RadioGroupItem value="annual" id="annual" className="border-primary text-primary">
                      <div className={`w-4 h-4 rounded-full ${selectedPlan === 'annual' ? 'bg-primary' : ''}`} />
                    </RadioGroupItem>
                    <Label htmlFor="annual" className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-bold">Anual</span>
                        <span className="text-xs font-semibold">R$45<span className="text-muted-foreground">/mês</span></span>
                      </div>
                    </Label>
                  </div>
                  <div className={`flex items-center space-x-2 border rounded-lg p-4 ${selectedPlan === 'monthly' ? 'bg-secondary' : ''}`}>
                    <RadioGroupItem value="monthly" id="monthly" className="border-primary text-primary">
                      <div className={`w-4 h-4 rounded-full ${selectedPlan === 'monthly' ? 'bg-primary' : ''}`} />
                    </RadioGroupItem>
                    <Label htmlFor="monthly" className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-bold">Mensal</span>
                        <span className="text-xs font-semibold">R$60<span className="text-muted-foreground">/mês</span></span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
                <div className="space-y-2">
                  <h3 className="font-semibold">O plano individual inclui:</h3>
                  <ul className="space-y-1">
                    {
                      ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
                        .map((item, index) => (
                          <li key={index} className="flex items-center">
                            <CheckIcon className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))
                    }
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl font-bold">Total</span>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold">R$0</span>
                    <span className="text-xs text-right">
                      <span className="font-bold">R$540</span>, após o período de teste de <b>14 dias.</b></span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-10 space-y-6">

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}