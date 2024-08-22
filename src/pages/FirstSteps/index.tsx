import { SelectTimeZone } from "@/components/SelectTimeZone"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CheckIcon } from "lucide-react"
import { useState } from "react"

export const FirstSteps = () => {
  const [selectedPlan, setSelectedPlan] = useState("annual")

  return (
    <main className="flex items-center justify-center min-h-screen p-10 antialiased bg-background">
      <div className="container mx-auto p-4 max-w-[1440px]">
        <h1 className="mb-2 text-3xl font-bold">Bem-Vindo(a) à Pencil.In!</h1>
        <p className="mb-6 text-muted-foreground">Nós informe alguns dados básicos para que possamos configurar o seu perfil do <b>Pelcin.In</b></p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <Accordion type="single" collapsible className="w-full border rounded-lg">
              <AccordionItem value="account-setup">
                <AccordionTrigger className="px-5">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h2 className="font-semibold text-left">Informações da Conta</h2>
                      <p className="text-sm text-left text-muted-foreground">Usaremos essas informações para disponibilizar o acesso para seus clientes e configura sua agenda.</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="userName">Nome do usuario</Label>
                    <div className="flex">
                      <Input className="pr-0 rounded-r-none w-fit" disabled placeholder="Pencil.In.com.br/" />
                      <Input className="rounded-l-none" id="userName" type="text" placeholder="my-barber-shop" />
                    </div>
                  </div>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" type="text" placeholder="Paulo Henrique Bahia Silva" />
                  </div>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="userName">Fuso Hórario</Label>
                    <SelectTimeZone />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full border rounded-lg">
              <AccordionItem value="account-setup">
                <AccordionTrigger className="px-5">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h2 className="font-semibold text-left">Descrição do seu Perfil</h2>
                      <p className="text-sm text-left text-muted-foreground">Uma breve descrição sobre o seu estabelecimento juntamente com uma foto para assim dar forma a seu perfil</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="userName">Nome do usuario</Label>
                    <div className="flex">
                      <Input className="pr-0 rounded-r-none w-fit" disabled placeholder="Pencil.In.com.br/" />
                      <Input className="rounded-l-none" id="userName" type="text" placeholder="my-barber-shop" />
                    </div>
                  </div>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" type="text" placeholder="Paulo Henrique Bahia Silva" />
                  </div>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="userName">Fuso Hórario</Label>
                    <SelectTimeZone />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full border rounded-lg">
              <AccordionItem value="account-setup">
                <AccordionTrigger className="px-5">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h2 className="font-semibold text-left">Detalhes do Pagamento</h2>
                      <p className="text-sm text-left text-muted-foreground">Suas informações seram mantidas em total sigilo e só será realizado o pagamento após o finalização do periodo de teste</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="userName">Nome do usuario</Label>
                    <div className="flex">
                      <Input className="pr-0 rounded-r-none w-fit" disabled placeholder="Pencil.In.com.br/" />
                      <Input className="rounded-l-none" id="userName" type="text" placeholder="my-barber-shop" />
                    </div>
                  </div>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" type="text" placeholder="Paulo Henrique Bahia Silva" />
                  </div>
                  <div className="flex flex-col px-6 pt-3 gap-y-3">
                    <Label htmlFor="userName">Fuso Hórario</Label>
                    <SelectTimeZone />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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