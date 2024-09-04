import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PaymentDetailsFormSchema } from "@/schemas/paymentDetailsFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'

export const PaymentDetails = () => {

  const form = useForm<z.infer<typeof PaymentDetailsFormSchema>>({
    resolver: zodResolver(PaymentDetailsFormSchema),
    defaultValues: {
      apartment: '',
      billingAddress: '',
      cardCvv: '',
      cardExpirationDate: '',
      cardNumber: '',
      city: '',
      state: '',
      zipCode: ''
    },
  })

  function onSubmit({ }: z.infer<typeof PaymentDetailsFormSchema>) { }

  return (
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
        <AccordionContent >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 px-6 pt-3 gap-y-3 gap-x-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="billingAddress"
                render={({ field }) => (
                  <FormItem className="col-span-2 space-y-2">
                    <FormLabel>
                      Endereço de cobrança
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs font-semibold" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem className="col-span-2 space-y-2 sm:col-span-1">
                    <FormLabel>
                      Apartamento, Bloco, etc.
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs font-semibold" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="col-span-2 space-y-2 sm:col-span-1">
                    <FormLabel>
                      Cidade
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs font-semibold" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="col-span-2 space-y-2 sm:col-span-1">
                    <FormLabel>
                      Estado
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs font-semibold" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem className="col-span-2 space-y-2 sm:col-span-1">
                    <FormLabel>
                      CEP
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs font-semibold" />
                  </FormItem>
                )}
              />
              <div className="col-span-2 space-y-2">
                <Label htmlFor="name">Informações do cartão</Label>
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          maxLength={19}
                          pattern="d{4}[s-]?d{4}[s-]?d{4}[s-]?d{4}"
                          placeholder="0000 0000 0000 0000"
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "")
                            value = value.replace(/(\d{4})(?=\d)/g, "$1-")
                            e.target.value = value
                          }}
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-semibold" />
                    </FormItem>
                  )}
                />
                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="cardExpirationDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col flex-1">
                        <FormControl>
                          <Input {...field} type="text" maxLength={5} pattern="d{2}/d{2}" placeholder="MM/YY" />
                        </FormControl>
                        <FormMessage className="text-xs font-semibold" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cardCvv"
                    render={({ field }) => (
                      <FormItem className="flex flex-col flex-1">
                        <FormControl>
                          <Input {...field} type="text" maxLength={3} pattern="d{3}" placeholder="CVC" />
                        </FormControl>
                        <FormMessage className="text-xs font-semibold" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full col-span-2 mt-2 text-white bg-violet-700 hover:bg-violet-600">Finalizar Cadastro</Button>
            </form>
          </Form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
